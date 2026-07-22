document.addEventListener('DOMContentLoaded', () => {
    // 1. OTOMATISASI PATH VIDEO
    // Deteksi apakah halaman saat ini berada di dalam subfolder (misal: Galery)
    const pathName = window.location.pathname;
    const isInsideSubfolder = /\/galery\//i.test(pathName);
    const prefix = isInsideSubfolder ? '../' : '';

    // 2. MEMBUAT ELEMEN OVERLAY LOADING
    const overlay = document.createElement('div');
    overlay.id = 'loading-overlay';
    
    // Gunakan `${prefix}` agar path video menyesuaikan posisi HTML
    overlay.innerHTML = `
        <video class="loader-video" muted playsinline>
            <source src="${prefix}video/chibi2.webm" type="video/webm">
        </video>
    `;
    document.body.appendChild(overlay);

    const video = overlay.querySelector('video');

    // Fungsi untuk transisi halaman
    function navigateWithLoading(url) {
        overlay.classList.add('active');
        video.currentTime = 0; // Pastikan animasi mulai dari detik 0
        video.play();
        
        // Jeda 1.5 detik agar animasi terlihat
        setTimeout(() => {
            window.location.href = url;
        }, 1500); 
    }

    // 3. MENANGANI KLIK LINK SECARA GLOBAL (EVENT DELEGATION)
    // Menggunakan cara ini agar link di dalam Web Component (Navbar/Footer) yang di-render 
    // belakangan tetap bisa memicu loading screen.
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (!link) return;

        const href = link.getAttribute('href');
        
        // Logika pengecekan link internal
        if (href && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('http') && !href.startsWith('javascript:')) {
            e.preventDefault();
            navigateWithLoading(href);
        }
    });
});

// --- EFEK MENGETIK (TYPING EFFECT) ---
const textElement = document.getElementById("typing");
const words = ["Innovative-Independent, Outstanding"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    // Mengantisipasi jika halaman tertentu tidak memiliki elemen id="typing" agar tidak error
    if (!textElement) return;

    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentWord.substring(0, charIndex + 1);
    }

    let speed = isDeleting ? 100 : 200;

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        speed = 2000; // Jeda saat kata sudah lengkap
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

// Jalankan efek mengetik setelah DOM siap
document.addEventListener("DOMContentLoaded", typeEffect);