document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 1. OTOMATISASI PATH & OVERLAY LOADING
    // ==========================================
    const pathName = window.location.pathname;
    const isInsideSubfolder = /\/galery\//i.test(pathName);
    const prefix = isInsideSubfolder ? '../' : '';

    const overlay = document.createElement('div');
    overlay.id = 'loading-overlay';
    
    overlay.innerHTML = `
        <video class="loader-video" muted playsinline>
            <source src="${prefix}video/chibi2.webm" type="video/webm">
        </video>
    `;
    document.body.appendChild(overlay);

    const video = overlay.querySelector('video');

    function navigateWithLoading(url) {
        overlay.classList.add('active');
        if (video) {
            video.currentTime = 0;
            video.play().catch(() => {}); // Catch jika browser memblokir autoplay
        }
        
        setTimeout(() => {
            window.location.href = url;
        }, 400); 
    }

    // Reset overlay saat navigasi kembali (bfcache / tombol back browser)
    window.addEventListener('pageshow', () => {
        if (overlay) {
            overlay.classList.remove('active');
        }
    });

    // Event Delegation untuk Link
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (!link) return;

        const href = link.getAttribute('href');
        const target = link.getAttribute('target');

        // Abaikan link eksternal, target="_blank", download, mailto, tel, hash internal, atau javascript:
        if (!href || target === '_blank' || link.hasAttribute('download') || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('http://') || href.startsWith('https://') || href.startsWith('//') || href.startsWith('javascript:')) {
            return;
        }

        e.preventDefault();
        navigateWithLoading(href);
    });

    // ==========================================
    // 2. NAVIGASI SLIDER BERITA
    // ==========================================
    const sliderContainer = document.getElementById('news-slider-container');
    const prevBtn = document.getElementById('prev-news');
    const nextBtn = document.getElementById('next-news');

    if (sliderContainer && prevBtn && nextBtn) {
        const scrollAmount = 400; // Jarak geser per klik (px)

        nextBtn.addEventListener('click', () => {
            sliderContainer.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });

        prevBtn.addEventListener('click', () => {
            sliderContainer.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });
    }

    // Jalankan efek mengetik setelah DOM siap
    typeEffect();
});


// ==========================================
// 3. EFEK MENGETIK (TYPING EFFECT)
// ==========================================
const words = ["Innovative-Independent, Outstanding"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const textElement = document.getElementById("typing");
    if (!textElement) return;

    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex);
        charIndex--;
    } else {
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++; // Increment agar pengetikan berjalan maju
    }

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        speed = 2000; // Jeda 2 detik saat kalimat lengkap
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 500;
    }

    setTimeout(typeEffect, speed);
}