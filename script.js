document.addEventListener('DOMContentLoaded', () => {
    // Membuat elemen overlay
    const overlay = document.createElement('div');
    overlay.id = 'loading-overlay';
    
    // Memasukkan elemen video
    overlay.innerHTML = `
        <video class="loader-video" muted playsinline>
            <source src="video/chibi2.webm" type="video/webm">
        </video>
    `;
    document.body.appendChild(overlay);

    const video = overlay.querySelector('video');

    // Fungsi untuk transisi
    function navigateWithLoading(url) {
        overlay.classList.add('active');
        video.currentTime = 0; // Pastikan animasi mulai dari detik 0
        video.play();
        
        // Jeda 1.5 detik agar animasi terlihat (bisa disesuaikan dengan durasi video Anda)
        setTimeout(() => {
            window.location.href = url;
        }, 1500); 
    }

    // Menangani semua klik link
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Logika pengecekan link internal
            if (href && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('http')) {
                e.preventDefault();
                navigateWithLoading(href);
            }
        });
    });
});

const textElement = document.getElementById("typing");
    const words = ["Innovative-Independent, Outstanding"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            textElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            textElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
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

    document.addEventListener("DOMContentLoaded", typeEffect);

    