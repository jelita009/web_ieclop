class MainFooter extends HTMLElement {
    connectedCallback() {
        // OTOMATISASI PATH FOOTER:
        // Memeriksa apakah halaman saat ini berada di dalam folder 'Galery'
        const pathName = window.location.pathname;
        const isInsideSubfolder = /\/galery\//i.test(pathName);
        const prefix = isInsideSubfolder ? '../' : '';

        // Memastikan tidak ada class tailwind seperti bg-[] yang menimpa CSS eksternal kita
        this.innerHTML = `
        <footer class="footer text-white py-16 px-6">
            <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                <div class="space-y-4">
                    <h3 class="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                        UKM IECLOP
                    </h3>
                    <p class="text-sm text-gray-400 leading-relaxed text-justify" data-i18n="footerDesc">
                        UKM IECLOP adalah organisasi mahasiswa di Politeknik Negeri Lhokseumawe yang berfokus pada pengembangan kemampuan bahasa Inggris dan bahasa asing lainnya. Berdiri sejak 27 April 2007, IECLOP berkomitmen mencetak generasi yang unggul dalam komunikasi global.
                    </p>
                </div>
                <div>
                    <h3 class="text-lg font-bold mb-6 border-l-4 border-blue-500 pl-3" data-i18n="footerNav">Navigasi</h3>
                    <div class="grid grid-cols-2 gap-2 text-sm text-gray-400">
                        <a href="${prefix}index.html" class="hover:text-blue-300 transition" data-i18n="navHome">Beranda</a>
                        <a href="${prefix}about.html" class="hover:text-blue-300 transition" data-i18n="navAbout">Tentang Kami</a>
                        <a href="${prefix}education.html" class="hover:text-blue-300 transition">Education</a>
                        
                        <a href="${prefix}infocom.html" class="hover:text-blue-300 transition" data-i18n="footerInfocom">Infokom</a>
                        
                        <a href="${prefix}regen.html" class="hover:text-blue-300 transition">Regeneration</a>
                        <a href="${prefix}publicRL.html" class="hover:text-blue-300 transition">Public Relation</a>
                        <a href="${prefix}olympic.html" class="hover:text-blue-300 transition">Olympic</a>
                        <a href="${prefix}login.html" class="text-blue-400 hover:text-blue-200 font-semibold" data-i18n="footerAdmin">Dashboard Admin</a>
                    </div>
                </div>
                <div class="space-y-4">
                    <h3 class="text-lg font-bold mb-4" data-i18n="footerContact">Hubungi Kami</h3>
                    <div class="text-sm text-gray-400 space-y-2">
                        <p><i class="bi bi-geo-alt-fill mr-2 text-blue-500"></i>Politeknik Negeri Lhokseumawe, Aceh</p>
                        <p><i class="bi bi-telephone-fill mr-2 text-blue-500"></i>Public Relation: +62 895-0893-0294</p>
                    </div>
                    <div class="flex space-x-3 pt-2">
                        <a href="https://youtube.com/@ukmiecloppnl4498?si=wf4nPGg1ajEcEkEe" target="_blank" class="social-icon"><i class="bi bi-youtube"></i></a>
                        <a href="https://discord.gg/FKkKwpcntW" target="_blank" class="social-icon"><i class="bi bi-discord"></i></a>
                        <a href="https://www.instagram.com/ieclop.kbmpnl?igsh=MThtejFhazRvNDBhdg==" target="_blank" class="social-icon"><i class="bi bi-instagram"></i></a>
                        <a href="https://www.tiktok.com/@ukm_ieclop_pnl?_r=1&_t=ZS-967oGnQFHiW" target="_blank" class="social-icon"><i class="bi bi-tiktok"></i></a>
                        <a href="https://www.linkedin.com/company/ukm-ieclop-pnl/" target="_blank" class="social-icon"><i class="bi bi-linkedin"></i></a> 
                    </div>
                </div>
            </div>
            <div class="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-xs text-gray-600">
                <p data-i18n="footerRights">&copy; 2026 INFOCOM IECLOP. All Rights Reserved. Crafted with passion by Webmaster.</p>
            </div>
        </footer>`;
    }
}
customElements.define('main-footer', MainFooter);