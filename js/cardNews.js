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

    // 2. Logika Klik Navigasi Tombol Carousel (Kiri & Kanan)
    const sliderContainer = document.getElementById('news-slider-container');
    const prevBtn = document.getElementById('prev-news');
    const nextBtn = document.getElementById('next-news');

    if (sliderContainer && prevBtn && nextBtn) {
        // Paksa slider agar langsung mentok kekiri saat dimuat
        sliderContainer.scrollLeft = 0;
        // Fungsi untuk mengecek posisi scroll dan mengatur visibilitas tombol panah
        const updateArrowVisibility = () => {
            const scrollLeft = sliderContainer.scrollLeft;
            const maxScrollLeft = sliderContainer.scrollWidth - sliderContainer.clientWidth;
        
        //Jika scrollLeft mendekati atau sama dengan 0  (artinya mentok paling kiri/terbaru)
        if (scrollLeft <= 5) {
            // sembunyikan panah kiri menggunakan utility tailwind (atau set display = 'none')
            prevBtn.classList.add('opacity-0', 'pointer-events-none');
        } else {
            //Tampilkan kembali panah kiri saat bergeser ke kanan
            prevBtn.classList.remove('opacity-0', 'pointer-events-none');
        }

        //Opsional: Sembunyikan panah kanan jika sudah mentok paling kanan (berita terlama)
        if (scrollLeft >= maxScrollLeft - 5) {
            nextBtn.classList.add('opacity-0', 'pointer-events-none');
        } else {
            nextBtn.classList.remove('opacity-0', 'pointer-events-none');
        }  
    };

    // Jalankan fungsi saat pertamma kalidimuat agar panah kiri langsung hilang di awal
    updateArrowVisibility();

    // Pantau pergerakan scroll (baik karena klik tombol maupun geser jari/taouchdi HP)
    sliderContainer.addEventListener('scroll', updateArrowVisibility);

        // Mengkalkulasi jarak geser dinamis berdasarkan lebar asli kartu saat ini
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

        // Tambahan cadangan jika browser lambat me-render layout CSS di awal
        window.addEventListener('load', () => {
            sliderContainer.scrollLeft = 0;
            updateArrowVisibility();
        });
    }

    // 3. Animasi Reveal saat Masuk ke Viewport (Scroll & Swipe)
    const observerOptions = { root: null, threshold: 0.02 };
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