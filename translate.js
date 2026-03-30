const translations = {
    id: {
        navHome: "Beranda", navDivisions: "Divisi", navStructure: "Struktur",
        navAbout: "Tentang",
        heroTitle: "UKM IECLOP <br><span class='text-blue-400'>Innovative - Independent</span> <br>Outstanding",
        heroDesc: "Improving English Club of Polytechnic. Wadah belajar bahasa Inggris terbaik di Politeknik Negeri Lhokseumawe.",
        btnExplore: "JELAJAHI", newsSectionTitle: "Berita Terkini", newsMore: "Selengkapnya",
        newsRead: "BACA KONTEN", news1Title: "Rapat Tahunan IECLOP 2024"
        // ... tambahkan sisa proker dan konten di sini
    },
    en: {
        navHome: "Home", navDivisions: "Divisions", navStructure: "Structure",
        navAbout:"About",
        heroTitle: "UKM IECLOP <br><span class='text-blue-400'>Innovative - Independent</span> <br>Outstanding",
        heroDesc: "The premier English learning hub at Lhokseumawe State Polytechnic.",
        btnExplore: "EXPLORE NOW", newsSectionTitle: "Latest News", newsMore: "See More",
        newsRead: "READ MORE", news1Title: "IECLOP Annual Meeting 2024"
    }
};

function changeLanguage(lang) {
    // Simpan pilihan ke localStorage agar saat pindah halaman tetap konsisten
    localStorage.setItem('preferredLang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.innerHTML = translations[lang][key];
    });

    // Update elemen statis dengan ID
    document.getElementById('hero-title').innerHTML = translations[lang].heroTitle;
    document.getElementById('hero-desc').innerText = translations[lang].heroDesc;
    document.getElementById('btn-explore').innerText = translations[lang].btnExplore;
    document.getElementById('news-section-title').innerText = translations[lang].newsSectionTitle;
    document.getElementById('news-more').innerText = translations[lang].newsMore;

    // Toggle active class
    document.getElementById('btn-id').classList.toggle('lang-active', lang === 'id');
    document.getElementById('btn-en').classList.toggle('lang-active', lang === 'en');
}

// Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'id';
    changeLanguage(savedLang);
});