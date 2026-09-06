import os
import re
import sys
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

class RangeRequestHandler(SimpleHTTPRequestHandler):
    """
    HTTP Request Handler dengan dukungan HTTP Range (RFC 7233)
    Memungkinkan video streaming (MP4) dimuat secara instan (206 Partial Content)
    tanpa harus mengunduh seluruh isi file video sekaligus.
    """
    def end_headers(self):
        self.send_header('Accept-Ranges', 'bytes')
        super().end_headers()

    def send_head(self):
        if 'Range' not in self.headers:
            self.range = None
            return super().send_head()

        path = self.translate_path(self.path)
        f = None
        try:
            f = open(path, 'rb')
        except OSError:
            self.send_error(HTTPStatus.NOT_FOUND, "File not found")
            return None

        try:
            fs = os.fstat(f.fileno())
            file_len = fs.st_size
            range_header = self.headers.get('Range')
            match = re.match(r'bytes=(\d+)-(\d*)', range_header)
            if not match:
                self.send_error(HTTPStatus.REQUESTED_RANGE_NOT_SATISFIABLE)
                f.close()
                return None

            start = int(match.group(1))
            end = int(match.group(2)) if match.group(2) else file_len - 1
            if start >= file_len or end >= file_len or start > end:
                self.send_error(HTTPStatus.REQUESTED_RANGE_NOT_SATISFIABLE)
                f.close()
                return None

            content_len = end - start + 1
            self.send_response(HTTPStatus.PARTIAL_CONTENT)
            self.send_header("Content-Type", self.guess_type(path))
            self.send_header("Content-Range", f"bytes {start}-{end}/{file_len}")
            self.send_header("Content-Length", str(content_len))
            self.send_header("Last-Modified", self.date_time_string(fs.st_mtime))
            self.end_headers()

            f.seek(start)
            self.range = (start, end, content_len)
            return f
        except Exception:
            f.close()
            raise

    def copyfile(self, source, outputfile):
        if not hasattr(self, 'range') or not self.range:
            return super().copyfile(source, outputfile)

        _, _, remaining = self.range
        chunk_size = 64 * 1024
        try:
            while remaining > 0:
                read_size = min(chunk_size, remaining)
                buf = source.read(read_size)
                if not buf:
                    break
                outputfile.write(buf)
                remaining -= len(buf)
        except (ConnectionResetError, ConnectionAbortedError):
            pass

if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 5500
    server = ThreadingHTTPServer(('0.0.0.0', port), RangeRequestHandler)
    print(f"Serving HTTP on 0.0.0.0 port {port} with Range support...")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
