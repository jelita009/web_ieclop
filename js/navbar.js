class MainNavbar extends HTMLElement {
    connectedCallback() {
        const currentPath = window.location.pathname.split("/").pop() || 'index.html';

        this.innerHTML = `
        <nav class="navbar-main">
            <div class="flex items-center space-x-3">
                <img src="image/logo_IECLOP.png" alt="Logo IECLOP" class="h-10 md:h-12 w-auto object-contain">
                <span class="text-xl md:text-2xl font-black tracking-tighter uppercase">IECLOP</span>
            </div>

            <div class="hidden md:flex items-center space-x-10 font-semibold tracking-wide">
                <a href="index.html" id="nav-home" class="nav-link ${currentPath === 'index.html' ? 'active' : ''}" data-i18n="navHome">Beranda</a>
                <a href="about.html" id="nav-about" class="nav-link ${currentPath === 'about.html' ? 'active' : ''}" data-i18n="navAbout">Tentang</a>
                <a href="struktur.html" id="nav-structure" class="nav-link ${currentPath === 'struktur.html' ? 'active' : ''}" data-i18n="navStructure">Struktur</a>

                <div class="dropdown">
                    <button class="nav-link flex items-center group">
                        <span data-i18n="navDivisions">Divisi</span>
                        <i class="fa-solid fa-chevron-down text-xs ml-2 transition-transform group-hover:rotate-180"></i>
                    </button>
                    <div class="dropdown-menu-wrapper">
                        <div class="dropdown-content">
                            <a href="education.html">
                                <i class="fa-solid fa-graduation-cap mr-2"></i> Education
                            </a>
                            <a href="infocom.html">
                                <i class="fa-solid fa-laptop-code mr-2"></i> Infocom
                            </a>
                            <a href="regen.html">
                                <i class="fa-solid fa-user-plus mr-2"></i> Regeneration
                            </a>
                            <a href="publicRL.html">
                                <i class="fa-solid fa-handshake-angle mr-2"></i> Public Relation
                            </a>
                            <a href="olympic.html">
                                <i class="fa-solid fa-trophy mr-2"></i> Olympic
                            </a>
                        </div>
                    </div>
                </div>

                <a href="memory.html" id="nav-memory" class="nav-link ${currentPath === 'memory.html' ? 'active' : ''}" data-i18n="navMemory">Memory</a>
            </div>

            <div class="flex items-center space-x-6">
                <div class="lang-container">
                    <span onclick="changeLanguage('id')" id="btn-id" class="lang-link lang-active">ID</span>
                    <span class="text-gray-500">|</span>
                    <span onclick="changeLanguage('en')" id="btn-en" class="lang-link">EN</span>
                </div>
                <a href="login.html" class="admin-login-btn" style="display: flex; align-items: center; justify-content: center; text-decoration: none;">
                    <i class="fa-solid fa-user-shield"></i>
                </a>
            </div>
        </nav>
        `;
    }
}

customElements.define('main-navbar', MainNavbar);
// --- FITUR PENYAMBUNG VIDEO BACKGROUND ---
document.addEventListener("DOMContentLoaded", () => {
    const bgVideo = document.querySelector('.video-bg');
    
    if (bgVideo) {
        // 1. Cek apakah ada catatan detik video di memori browser (Session Storage)
        const savedTime = sessionStorage.getItem('bgVideoTime');
        
        // Jika ada, langsung setel video ke detik tersebut
        if (savedTime !== null) {
            bgVideo.currentTime = parseFloat(savedTime);
        }
        
        // 2. Setiap kali pengunjung akan pindah halaman, catat detik terakhir videonya
        window.addEventListener('beforeunload', () => {
            sessionStorage.setItem('bgVideoTime', bgVideo.currentTime);
        });
    }
});