document.addEventListener("DOMContentLoaded", () => {
    // 1. Logika Sorting Berita Otomatis (Terbaru Muncul Paling Depan)
    const container = document.getElementById('news-container');
    const cards = Array.from(container.getElementsByClassName('news-card'));

    cards.sort((a, b) => {
        const dateA = new Date(a.getAttribute('data-date'));
        const dateB = new Date(b.getAttribute('data-date'));
        return dateB - dateA; 
    });

    // Masukkan kembali element card yang sudah terurut ke dalam DOM
    cards.forEach(card => container.appendChild(card));

    // 2. Logika Klik Navigasi Tombol Carousel (Kiri & Kanan)
    const sliderContainer = document.getElementById('news-slider-container');
    const prevBtn = document.getElementById('prev-news');
    const nextBtn = document.getElementById('next-news');

    if (sliderContainer && prevBtn && nextBtn) {
        // Mengalkulasi jarak geser dinamis berdasarkan lebar asli kartu saat ini
        const getScrollAmount = () => {
            const firstCard = container.querySelector('.news-card');
            if (firstCard) {
                // clientWidth kartu + 24px (jarak gap antar kartu)
                return firstCard.getBoundingClientRect().width + 24;
            }
            return 340; 
        };

        // Tombol Next (Geser Kanan)
        nextBtn.addEventListener('click', () => {
            sliderContainer.scrollBy({
                left: getScrollAmount(),
                behavior: 'smooth'
            });
        });

        // Tombol Prev (Geser Kiri)
        prevBtn.addEventListener('click', () => {
            sliderContainer.scrollBy({
                left: -getScrollAmount(),
                behavior: 'smooth'
            });
        });
    }

    // 3. Animasi Reveal saat Masuk ke Viewport (Scroll & Swipe)
    const observerOptions = { 
        root: null, 
        threshold: 0.02 // Dibuat kecil agar kartu langsung aktif saat tergeser jari di mobile
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach(card => observer.observe(card));
});