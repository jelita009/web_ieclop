document.addEventListener("DOMContentLoaded", () => {
    // 1. Logika Sorting Berita Otomatis (Terbaru Muncul Paling Depan)
    const container = document.getElementById('news-container');
    if (!container) return;
    const cards = Array.from(container.getElementsByClassName('news-card'));

    cards.sort((a, b) => {
        const dateA = new Date(a.getAttribute('data-date'));
        const dateB = new Date(b.getAttribute('data-date'));
        return dateB - dateA; 
    });

    // Masukkan kembali element card yang sudah terurut ke dalam DOM
    cards.forEach(card => container.appendChild(card));

    // 2. Logika Navigasi, Drag-to-Scroll & Pagination Counter
    const sliderContainer = document.getElementById('news-slider-container');
    const prevBtn = document.getElementById('prev-news');
    const nextBtn = document.getElementById('next-news');
    const newsCounter = document.getElementById('news-counter');

    if (sliderContainer && prevBtn && nextBtn) {
        sliderContainer.scrollLeft = 0;
        sliderContainer.setAttribute('tabindex', '0');
        sliderContainer.setAttribute('role', 'region');
        sliderContainer.setAttribute('aria-label', 'Daftar Berita dan Prestasi Terkini');

        const totalCards = cards.length;

        // Hitung jarak scroll per card + gap
        const getCardStep = () => {
            const firstCard = container.querySelector('.news-card');
            if (firstCard) {
                return firstCard.getBoundingClientRect().width + 24; // width + gap
            }
            return 360;
        };

        // Update indikator nomor aktif dan visibilitas tombol panah
        const updateSliderState = () => {
            const scrollLeft = sliderContainer.scrollLeft;
            const maxScrollLeft = sliderContainer.scrollWidth - sliderContainer.clientWidth;
            const step = getCardStep();

            // Hitung card index aktif (1-based)
            const currentIndex = Math.min(totalCards, Math.max(1, Math.round(scrollLeft / step) + 1));
            if (newsCounter) {
                newsCounter.textContent = `${currentIndex} / ${totalCards}`;
            }

            // Atur tombol prev
            if (scrollLeft <= 5) {
                prevBtn.classList.add('opacity-30', 'cursor-not-allowed');
                prevBtn.setAttribute('aria-disabled', 'true');
            } else {
                prevBtn.classList.remove('opacity-30', 'cursor-not-allowed');
                prevBtn.removeAttribute('aria-disabled');
            }

            // Atur tombol next
            if (scrollLeft >= maxScrollLeft - 5) {
                nextBtn.classList.add('opacity-30', 'cursor-not-allowed');
                nextBtn.setAttribute('aria-disabled', 'true');
            } else {
                nextBtn.classList.remove('opacity-30', 'cursor-not-allowed');
                nextBtn.removeAttribute('aria-disabled');
            }
        };

        // Inisialisasi awal
        updateSliderState();
        sliderContainer.addEventListener('scroll', updateSliderState, { passive: true });

        // Tombol Next (Geser Kanan)
        nextBtn.addEventListener('click', () => {
            sliderContainer.scrollBy({
                left: getCardStep(),
                behavior: 'smooth'
            });
        });

        // Tombol Prev (Geser Kiri)
        prevBtn.addEventListener('click', () => {
            sliderContainer.scrollBy({
                left: -getCardStep(),
                behavior: 'smooth'
            });
        });

        // 3. Fitur Mouse Drag-to-Scroll (Desktop)
        let isDown = false;
        let startX = 0;
        let scrollStartLeft = 0;
        let hasMoved = false;

        sliderContainer.addEventListener('mousedown', (e) => {
            // Hindari drag jika klik tombol atau link
            if (e.target.closest('button, a')) return;
            isDown = true;
            hasMoved = false;
            sliderContainer.classList.add('grabbing');
            startX = e.pageX - sliderContainer.offsetLeft;
            scrollStartLeft = sliderContainer.scrollLeft;
        });

        sliderContainer.addEventListener('mouseleave', () => {
            if (isDown) {
                isDown = false;
                sliderContainer.classList.remove('grabbing');
            }
        });

        sliderContainer.addEventListener('mouseup', () => {
            if (isDown) {
                isDown = false;
                sliderContainer.classList.remove('grabbing');
            }
        });

        sliderContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - sliderContainer.offsetLeft;
            const walk = (x - startX) * 1.5; // multiplier kecepatan drag
            if (Math.abs(walk) > 5) {
                hasMoved = true;
            }
            sliderContainer.scrollLeft = scrollStartLeft - walk;
        });

        // 4. Keyboard Arrow Navigation (Aksesibilitas Power User)
        sliderContainer.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') {
                e.preventDefault();
                sliderContainer.scrollBy({ left: getCardStep(), behavior: 'smooth' });
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                sliderContainer.scrollBy({ left: -getCardStep(), behavior: 'smooth' });
            }
        });

        window.addEventListener('load', () => {
            sliderContainer.scrollLeft = 0;
            updateSliderState();
        });

        window.addEventListener('resize', updateSliderState);
    }

    // 5. Animasi Reveal saat Masuk ke Viewport (Scroll & Swipe)
    const observerOptions = { root: null, threshold: 0.05 };
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