# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
- **Mahasiswa & Calon Anggota UKM IECLOP PNL**: Mahasiswa aktif Politeknik Negeri Lhokseumawe yang mencari informasi organisasi, jadwal open recruitment (Regenerasi), workshop, dan materi pembelajaran teknologi/fotografi.
- **Anggota & Pengurus UKM IECLOP**: Mengakses arsip modul (Learning Hub), dokumentasi kegiatan divisi, struktur organisasi, dan berita acara.
- **Pihak Kampus & Eksternal**: Memverifikasi legalitas organisasi, portofolio prestasi (Olympic), dan informasi kontak kemitraan (Public Relations).

## Product Purpose
Menjadi portal web resmi UKM IECLOP (Information Education Computer Club and Photography) Politeknik Negeri Lhokseumawe yang menyediakan pusat informasi terpadu, repositori modul pembelajaran interaktif, dokumentasi galeri kegiatan, struktur kepengurusan, serta sarana promosi dan komunikasi bilingual (ID/EN) yang modern, estetik, dan responsif.

## Positioning
Portal web UKM teknologi dan multimedia terdepan di lingkungan Politeknik Negeri Lhokseumawe yang memadukan profil organisasi, repositori modul digital (Google Drive integration), arsip galeri multi-kategori, dan visual multimedia sinematik dalam satu ekosistem web modern.

## Operating Context
- Diakses melalui berbagai perangkat (desktop, laptop, tablet, dan smartphone Android/iOS).
- Mendukung dua bahasa (Bahasa Indonesia & English) secara realtime.
- Lingkungan kampus dengan konektivitas bervariasi; memerlukan aset teroptimasi (format WebP, lazy loading, script modular).

## Capabilities and Constraints
- **Stack**: Pure Vanilla HTML5, CSS3, JavaScript (Multi-Page Architecture), tanpa dependensi framework runtime berat.
- **Media**: Aset video profil terkelola melalui Git LFS, gambar dalam format modern `.webp`.
- **Navigasi & Footer**: Dinamis dan terpusat (`js/navbar.js` & `js/footer.js`).
- **Learning Hub**: Pencarian modul digital real-time, filter kategori divisi (Infocom, Olympic, Public Relation, Education, Regeneration), dan integrasi Google Drive.
- **Bilingual Engine**: Sistem translasi berbasis atribut `data-i18n` via `js/translate.js`.

## Brand Commitments
- **Nama Organisasi**: UKM IECLOP PNL (Information Education Computer Club and Photography - Politeknik Negeri Lhokseumawe).
- **Palet Warna Utama**: Indigo Deep Navy (`#0b0f19` / `#0f172a`), Vibrant Blue (`#2563eb` / `#3b82f6`), Emerald/Cyan accents, Gold/Yellow accents.
- **Tipografi**: Outfit / Inter / Poppins (Google Fonts) dengan keterbacaan tinggi.
- **Identitas**: Modern, teknologi tinggi, dinamis, profesional, dan berorientasi edukasi.

## Evidence on Hand
- Logo resmi UKM IECLOP (`img/logo_IECLOP.webp`, `img/favicon.webp`).
- Video Profil Resmi 2026 (`video/VIDEO PROFIL UKM IECLOP PNL - 2026_2.mp4`).
- Dokumentasi foto kepengurusan, kegiatan workshop, divisi, dan prestasi di folder `img/` dan `gallery/`.
- Repositori modul pembelajaran aktif di `learning.html` & `js/learning.js`.

## Product Principles
1. **Kejelasan Informasi & Akses Cepat**: Konten penting (profil, modul, kontak, berita) mudah ditemukan dalam maksimal 2 klik.
2. **Estetika Visual Modern**: Tampilan sinematik, micro-interactions halus, dan tata letak elegan yang mencerminkan UKM berbasis teknologi & fotografi.
3. **Performa & Ringan**: Aset teroptimasi (WebP & WebM/MP4 LFS) agar responsif dan cepat dimuat di seluruh perangkat.
4. **Inklusivitas & Aksesibilitas**: Keterbacaan tinggi, kontras warna yang nyaman di mata, dan dukungan bilingual ID/EN.

## Accessibility & Inclusion
- Target kepatuhan WCAG 2.1 Level AA untuk kontras warna teks dan elemen interaktif.
- Struktur semantik HTML5 dengan heading hierarchy teratur dan dukungan keyboard navigation.
- Label deskriptif pada tombol aksi dan tautan navigasi.
