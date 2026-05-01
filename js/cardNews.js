document.addEventListener("DOMContentLoaded", () => {
    // 1. Logika Sorting Berita Otomatis
    const container = document.getElementById('news-container');
    const cards = Array.from(container.getElementsByClassName('news-card'));

    cards.sort((a, b) => {
        const dateA = new Date(a.getAttribute('data-date'));
        const dateB = new Date(b.getAttribute('data-date'));
        return dateB - dateA; // Urutkan dari terbaru
    });

    // Masukkan kembali ke dalam container setelah diurutkan
    cards.forEach(card => container.appendChild(card));

    // 2. Animasi Reveal saat Scroll
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    cards.forEach(card => observer.observe(card));
});