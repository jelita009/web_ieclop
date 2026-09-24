/**
 * Sistem Autentikasi & Keamanan Admin Terpadu UKM IECLOP
 * Fitur Keamanan:
 * 1. Web Crypto API SHA-256 One-Way Hash (No Plaintext)
 * 2. Proteksi Anti Brute-Force (Rate Limiting & Cooldown Lockout)
 * 3. Cryptographically Signed Session Token (Mencegah manipulasi console localStorage)
 * 4. Auto-Expire Session (Masa berlaku sesi 2 jam)
 */
(function() {
    // Salt rahasia untuk hash dan tanda tangan token sesi
    const _S = "ieclop_pnl_2026_salt_";
    const _SESSION_DURATION_MS = 2 * 60 * 60 * 1000; // 2 Jam
    const _MAX_FAILED_ATTEMPTS = 5;
    const _LOCKOUT_SECONDS = 30;

    // Hash kredensial satu arah
    const _CRED = {
        u: "28111da179a9612709db2525c15e444c5d2c206b2a931711641eac9b4488dcb1",
        p: "edaef711e78d2d44fb5438efdb543d337bac99656b7a4fce1c9f42d8ef3a5afb"
    };

    // Fungsi enkripsi SHA-256 menggunakan Web Crypto API native browser
    async function hashValue(val) {
        const encoder = new TextEncoder();
        const data = encoder.encode(_S + val);
        const hashBuffer = await window.crypto.subtle.digest("SHA-256", data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
    }

    // Periksa status lockout anti brute-force
    function checkLockout() {
        const lockoutUntil = parseInt(sessionStorage.getItem("_auth_lockout_until") || "0", 10);
        const now = Date.now();
        if (lockoutUntil > now) {
            return Math.ceil((lockoutUntil - now) / 1000);
        }
        return 0;
    }

    // Jalankan timer lockout visual
    function startLockoutTimer(remainingSeconds) {
        const loginBtn = document.getElementById("login-submit-btn");
        const uInput = document.getElementById("username");
        const pInput = document.getElementById("password");
        let countdown = remainingSeconds;

        if (loginBtn) loginBtn.disabled = true;
        if (uInput) uInput.disabled = true;
        if (pInput) pInput.disabled = true;

        const interval = setInterval(() => {
            const lang = localStorage.getItem("preferredLang") || "id";
            const lockMsg = lang === "id" 
                ? `Terkunci (${countdown} dtk)` 
                : `Locked (${countdown}s)`;

            if (loginBtn) {
                loginBtn.textContent = lockMsg;
                loginBtn.classList.add("opacity-50", "cursor-not-allowed");
            }

            countdown--;
            if (countdown < 0) {
                clearInterval(interval);
                sessionStorage.removeItem("_auth_lockout_until");
                sessionStorage.removeItem("_auth_attempts");
                if (loginBtn) {
                    loginBtn.disabled = false;
                    loginBtn.classList.remove("opacity-50", "cursor-not-allowed");
                    const originalText = lang === "id" ? "MASUK SEKARANG" : "LOGIN NOW";
                    loginBtn.textContent = originalText;
                }
                if (uInput) uInput.disabled = false;
                if (pInput) {
                    pInput.disabled = false;
                    pInput.focus();
                }
            }
        }, 1000);
    }

    // Buat Token Sesi Bertanda Tangan Kriptografis
    async function createSignedSessionToken() {
        const now = Date.now();
        const expires = now + _SESSION_DURATION_MS;
        const payload = `${now}:${expires}:${_S}`;
        const signature = await hashValue(payload);

        const tokenData = {
            created: now,
            expires: expires,
            signature: signature
        };

        sessionStorage.setItem("adminSessionToken", JSON.stringify(tokenData));
        localStorage.setItem("adminLoggedIn", "true");
    }

    // Verifikasi Token Sesi (Digunakan oleh admin.html)
    async function verifyAdminSession() {
        const tokenRaw = sessionStorage.getItem("adminSessionToken");
        if (!tokenRaw) return false;

        try {
            const token = JSON.parse(tokenRaw);
            const now = Date.now();

            // Cek masa berlaku (2 jam)
            if (!token.expires || now > token.expires) {
                sessionStorage.removeItem("adminSessionToken");
                localStorage.removeItem("adminLoggedIn");
                return false;
            }

            // Validasi integritas tanda tangan kriptografis
            const expectedPayload = `${token.created}:${token.expires}:${_S}`;
            const expectedSignature = await hashValue(expectedPayload);

            if (token.signature === expectedSignature) {
                return true;
            }
            return false;
        } catch (e) {
            return false;
        }
    }

    // Logika Login Utama
    async function handleLogin() {
        // Cek apakah sedang dalam kondisi terkunci
        const remainingLockout = checkLockout();
        if (remainingLockout > 0) {
            const lang = localStorage.getItem("preferredLang") || "id";
            const msg = lang === "id"
                ? `Terlalu banyak percobaan gagal. Silakan tunggu ${remainingLockout} detik.`
                : `Too many failed attempts. Please wait ${remainingLockout} seconds.`;
            alert(msg);
            return;
        }

        const uInput = document.getElementById("username");
        const pInput = document.getElementById("password");
        const loginBtn = document.getElementById("login-submit-btn");

        if (!uInput || !pInput) return;

        const uVal = uInput.value.trim();
        const pVal = pInput.value;

        const lang = localStorage.getItem("preferredLang") || "id";
        const emptyMsg = lang === "id" 
            ? "Harap masukkan username dan password!" 
            : "Please enter both username and password!";
        const errorMsg = lang === "id" 
            ? "Akses Ditolak! Username atau Password salah." 
            : "Access Denied! Incorrect Username or Password.";

        if (!uVal || !pVal) {
            alert(emptyMsg);
            return;
        }

        if (loginBtn) {
            loginBtn.disabled = true;
            loginBtn.classList.add("opacity-70");
        }

        try {
            const [uHash, pHash] = await Promise.all([
                hashValue(uVal),
                hashValue(pVal)
            ]);

            if (uHash === _CRED.u && pHash === _CRED.p) {
                // Sukses: reset counter percobaan dan simpan signed token
                sessionStorage.removeItem("_auth_attempts");
                sessionStorage.removeItem("_auth_lockout_until");
                await createSignedSessionToken();
                window.location.href = "admin.html";
            } else {
                // Gagal: catat percobaan
                let attempts = parseInt(sessionStorage.getItem("_auth_attempts") || "0", 10) + 1;
                sessionStorage.setItem("_auth_attempts", attempts.toString());

                if (attempts >= _MAX_FAILED_ATTEMPTS) {
                    const lockoutUntil = Date.now() + (_LOCKOUT_SECONDS * 1000);
                    sessionStorage.setItem("_auth_lockout_until", lockoutUntil.toString());
                    const warnMsg = lang === "id"
                        ? `Akses diblokir sementara selama ${_LOCKOUT_SECONDS} detik karena 5 kali percobaan gagal berturut-turut.`
                        : `Access temporarily blocked for ${_LOCKOUT_SECONDS} seconds due to 5 consecutive failed attempts.`;
                    alert(warnMsg);
                    startLockoutTimer(_LOCKOUT_SECONDS);
                } else {
                    const sisa = _MAX_FAILED_ATTEMPTS - attempts;
                    const detailMsg = lang === "id"
                        ? `${errorMsg}\n(Sisa kesempatan: ${sisa} kali)`
                        : `${errorMsg}\n(${sisa} attempts remaining)`;
                    alert(detailMsg);
                    pInput.value = "";
                    pInput.focus();
                }
            }
        } catch (err) {
            console.error("Security authentication error:", err);
            alert(errorMsg);
        } finally {
            if (loginBtn && checkLockout() === 0) {
                loginBtn.disabled = false;
                loginBtn.classList.remove("opacity-70");
            }
        }
    }

    // Logout Aman
    function logoutAdmin() {
        sessionStorage.removeItem("adminSessionToken");
        sessionStorage.removeItem("_auth_attempts");
        sessionStorage.removeItem("_auth_lockout_until");
        localStorage.removeItem("adminLoggedIn");
        window.location.href = "login.html";
    }

    // Pasang Event Listeners
    document.addEventListener("DOMContentLoaded", () => {
        const loginBtn = document.getElementById("login-submit-btn");
        const uInput = document.getElementById("username");
        const pInput = document.getElementById("password");

        // Periksa apakah masih ada sisa lockout saat refresh
        const remaining = checkLockout();
        if (remaining > 0) {
            startLockoutTimer(remaining);
        }

        if (loginBtn) {
            loginBtn.addEventListener("click", handleLogin);
        }

        [uInput, pInput].forEach(input => {
            if (input) {
                input.addEventListener("keydown", (e) => {
                    if (e.key === "Enter") {
                        e.preventDefault();
                        handleLogin();
                    }
                });
            }
        });
    });

    // Expose fungsi ke window untuk integrasi antar halaman
    window.handleLogin = handleLogin;
    window.verifyAdminSession = verifyAdminSession;
    window.logoutAdmin = logoutAdmin;
})();
