class MainNavbar extends HTMLElement {
    connectedCallback() {
        const pathName = window.location.pathname;
        const currentPath = pathName.split("/").pop() || 'index.html';

        // OTOMATISASI PATH: 
        // Jika halaman saat ini berada di dalam subfolder album (gallery), 
        // berikan prefix "../" untuk kembali ke root. Jika tidak, kosongkan "".
        const isInsideSubfolder = /\/(gallery|galery)\//i.test(pathName);
        const prefix = isInsideSubfolder ? '../' : '';

        // Tambahkan id="main-nav" di elemen <nav> di bawah ini
        this.innerHTML = `
        <nav class="navbar-main fixed top-0 left-0 w-full z-[999]" id="main-nav">
            <div class="flex items-center justify-between w-full">
                <div class="flex items-center space-x-3">
                    <img src="${prefix}img/logo_IECLOP.webp" alt="Logo IECLOP" class="h-10 md:h-12 w-auto object-contain">
                    <span class="text-xl md:text-2xl font-black tracking-tighter uppercase">UKM IECLOP</span>
                </div>

                <div class="hidden md:flex items-center space-x-10 font-semibold tracking-wide">
                    <a href="${prefix}index.html" id="nav-home" class="nav-link ${currentPath === 'index.html' ? 'active' : ''}" data-i18n="navHome">Beranda</a>
                    <a href="${prefix}about.html" id="nav-about" class="nav-link ${currentPath === 'about.html' ? 'active' : ''}" data-i18n="navAbout">Tentang</a>
                    <a href="${prefix}struktur.html" id="nav-structure" class="nav-link ${currentPath === 'struktur.html' ? 'active' : ''}" data-i18n="navStructure">Struktur</a>

                    <div class="dropdown">
                        <button class="nav-link flex items-center group" aria-haspopup="true" aria-expanded="false" aria-label="Menu Pilihan Divisi">
                            <span data-i18n="navDivisions">Divisi</span>
                            <i class="fa-solid fa-chevron-down text-xs ml-2 transition-transform group-hover:rotate-180"></i>
                        </button>
                        <div class="dropdown-menu-wrapper">
                            <div class="dropdown-content">
                                <a href="${prefix}education.html"><i class="fa-solid fa-graduation-cap mr-2"></i> Education</a>
                                <a href="${prefix}infocom.html"><i class="fa-solid fa-laptop-code mr-2"></i> Infocom</a>
                                <a href="${prefix}regen.html"><i class="fa-solid fa-user-plus mr-2"></i> Regeneration</a>
                                <a href="${prefix}publicRL.html"><i class="fa-solid fa-handshake-angle mr-2"></i> Public Relation</a>
                                <a href="${prefix}olympic.html"><i class="fa-solid fa-trophy mr-2"></i> Olympic</a>
                            </div>
                        </div>
                    </div>

                    <a href="${prefix}learning.html" id="nav-learning" class="nav-link ${currentPath === 'learning.html' ? 'active' : ''}" data-i18n="navLearning">Modul</a>
                    <a href="${prefix}gallery.html" id="nav-gallery" class="nav-link ${currentPath === 'gallery.html' ? 'active' : ''}" data-i18n="navGallery">Gallery</a>
                </div>

                <div class="flex items-center space-x-4 md:space-x-6">
                    <div class="lang-container hidden sm:flex" role="group" aria-label="Pilihan Bahasa">
                        <button type="button" onclick="changeLanguage('id')" id="btn-id" class="lang-link lang-active" aria-label="Bahasa Indonesia">ID</button>
                        <span class="text-gray-500">|</span>
                        <button type="button" onclick="changeLanguage('en')" id="btn-en" class="lang-link" aria-label="English Language">EN</button>
                    </div>
                    
                    <a href="${prefix}login.html" class="admin-login-btn flex items-center justify-center" aria-label="Login Pengurus / Dashboard Admin" title="Login Pengurus">
                        <i class="fa-solid fa-user-shield"></i>
                    </a>

                    <button id="mobile-menu-btn" class="md:hidden text-white text-2xl focus:outline-none transition-transform hover:scale-110" aria-label="Buka Menu Navigasi" aria-expanded="false">
                        <i class="fa-solid fa-bars"></i>
                    </button>
                </div>
            </div>

            <div id="mobile-menu" class="hidden flex-col absolute top-[120%] left-0 w-full bg-[rgba(10,20,50,0.95)] backdrop-blur-xl border border-white/10 rounded-2xl p-6 space-y-5 shadow-2xl md:hidden transition-all duration-300 origin-top">
                <a href="${prefix}index.html" class="block text-white font-bold hover:text-blue-300 ${currentPath === 'index.html' ? 'text-blue-300' : ''}" data-i18n="navHome">Beranda</a>
                <a href="${prefix}about.html" class="block text-white font-bold hover:text-blue-300 ${currentPath === 'about.html' ? 'text-blue-300' : ''}" data-i18n="navAbout">Tentang</a>
                <a href="${prefix}struktur.html" class="block text-white font-bold hover:text-blue-300 ${currentPath === 'struktur.html' ? 'text-blue-300' : ''}" data-i18n="navStructure">Struktur</a>
                
                <div class="block">
                    <button id="mobile-div-btn" class="flex justify-between items-center w-full text-white font-bold hover:text-blue-300">
                        <span data-i18n="navDivisions">Divisi</span>
                        <i class="fa-solid fa-chevron-down text-xs transition-transform" id="mobile-div-icon"></i>
                    </button>
                    <div id="mobile-div-menu" class="hidden flex-col pl-4 mt-3 space-y-4 border-l-2 border-[#1e3a8a]">
                        <a href="${prefix}education.html" class="text-sm text-blue-100 hover:text-white"><i class="fa-solid fa-graduation-cap w-6"></i> Education</a>
                        <a href="${prefix}infocom.html" class="text-sm text-blue-100 hover:text-white"><i class="fa-solid fa-laptop-code w-6"></i> Infocom</a>
                        <a href="${prefix}regen.html" class="text-sm text-blue-100 hover:text-white"><i class="fa-solid fa-user-plus w-6"></i> Regeneration</a>
                        <a href="${prefix}publicRL.html" class="text-sm text-blue-100 hover:text-white"><i class="fa-solid fa-handshake-angle w-6"></i> Public Relation</a>
                        <a href="${prefix}olympic.html" class="text-sm text-blue-100 hover:text-white"><i class="fa-solid fa-trophy w-6"></i> Olympic</a>
                    </div>
                </div>

                <a href="${prefix}learning.html" class="block text-white font-bold hover:text-blue-300 ${currentPath === 'learning.html' ? 'text-blue-300' : ''}" data-i18n="navLearning">Modul</a>
                <a href="${prefix}gallery.html" class="block text-white font-bold hover:text-blue-300 ${currentPath === 'gallery.html' ? 'text-blue-300' : ''}" data-i18n="navGallery">Gallery</a>
                
                <div class="flex sm:hidden items-center justify-center space-x-4 pt-4 border-t border-white/10">
                    <span onclick="changeLanguage('id')" class="lang-link font-bold cursor-pointer text-blue-300">ID</span>
                    <span class="text-gray-500">|</span>
                    <span onclick="changeLanguage('en')" class="lang-link font-bold cursor-pointer hover:text-blue-300">EN</span>
                </div>
            </div>
        </nav>
        `;

        // Interaksi Tombol Hamburger
        const btn = this.querySelector('#mobile-menu-btn');
        const menu = this.querySelector('#mobile-menu');
        const icon = btn.querySelector('i');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
            if (menu.classList.contains('hidden')) {
                icon.classList.replace('fa-xmark', 'fa-bars');
            } else {
                icon.classList.replace('fa-bars', 'fa-xmark');
            }
        });

        // Interaksi Menu Dropdown Divisi di Mobile
        const divBtn = this.querySelector('#mobile-div-btn');
        const divMenu = this.querySelector('#mobile-div-menu');
        const divIcon = this.querySelector('#mobile-div-icon');

        divBtn.addEventListener('click', () => {
            divMenu.classList.toggle('hidden');
            divMenu.classList.toggle('flex');
            divIcon.classList.toggle('rotate-180');
        });

        // Logika Navbar Berubah Warna (Dioptimasi dengan requestAnimationFrame & passive)
        const navBar = this.querySelector('#main-nav');
        let isScrolling = false;
        window.addEventListener('scroll', () => {
            if (!isScrolling) {
                window.requestAnimationFrame(() => {
                    if (window.scrollY > 50) {
                        navBar.classList.add('scrolled');
                    } else {
                        navBar.classList.remove('scrolled');
                    }
                    isScrolling = false;
                });
                isScrolling = true;
            }
        }, { passive: true });

        // Trigger bahasa otomatis jika translate.js sudah dimuat
        if (typeof changeLanguage === 'function') {
            const savedLang = localStorage.getItem('preferredLang') || 'id';
            changeLanguage(savedLang);
        }
    }
}

customElements.define('main-navbar', MainNavbar);

// --- FITUR PENYAMBUNG VIDEO BACKGROUND ---
document.addEventListener("DOMContentLoaded", () => {
    const bgVideo = document.querySelector('.video-bg');
    
    if (bgVideo) {
        const savedTime = sessionStorage.getItem('bgVideoTime');
        if (savedTime !== null) {
            bgVideo.currentTime = parseFloat(savedTime);
        }
        window.addEventListener('beforeunload', () => {
            sessionStorage.setItem('bgVideoTime', bgVideo.currentTime);
        });
    }
});