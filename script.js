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