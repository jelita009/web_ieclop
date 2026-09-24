document.addEventListener("DOMContentLoaded", function() {
    const galleryGrid = document.getElementById("gallery-grid");
    const dataContainer = document.getElementById("gallery-data");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const caption = document.getElementById("caption");
    const closeBtn = document.querySelector(".close-btn");

    // 1. MEMBACA DATA FOTO DARI FILE HTML MASING-MASING
    let galleryData = [];
    
    if (dataContainer) {
        try {
            galleryData = JSON.parse(dataContainer.textContent);
        } catch (e) {
            console.error("Gagal membaca data foto dari HTML. Pastikan format JSON benar.", e);
        }
    }

    // 2. CEK APAKAH FORMAT DATA ADALAH PROKER CARDS ATAU FOTO LANGSUNG
    const isProkerMode = galleryData.length > 0 && galleryData[0].hasOwnProperty("title");

    if (galleryGrid && galleryData.length > 0) {
        galleryGrid.innerHTML = ""; 
        
        if (isProkerMode) {
            // MODE KARTU PROGRAM KERJA (PROKER)
            galleryData.forEach((item, index) => {
                const aosDelay = (index % 4) * 100;
                const photoCount = item.photos ? item.photos.length : 0;
                const badgeText = photoCount > 0 ? `${photoCount} Foto` : '0 Foto';

                const cardHTML = `
                    <div class="proker-card group glass-card rounded-2xl overflow-hidden border border-white/10 shadow-xl cursor-pointer block transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_25px_rgba(30,58,138,0.5)]" data-aos="zoom-in-up" data-aos-delay="${aosDelay}" data-proker-index="${index}">
                        <div class="relative h-48 overflow-hidden bg-slate-900">
                            <img src="${item.cover}" alt="${item.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                            <div class="absolute top-3 right-3 bg-blue-600/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full shadow border border-blue-400/30">
                                ${badgeText}
                            </div>
                            <div class="absolute inset-0 bg-gradient-to-t from-[#0a1432] via-transparent to-transparent opacity-80"></div>
                        </div>
                        <div class="p-5">
                            <h3 class="text-xl font-bold text-white group-hover:text-blue-300 transition mb-1">${item.title}</h3>
                            <p class="text-xs text-gray-400">Proker Divisi • UKM IECLOP</p>
                        </div>
                    </div>
                `;
                galleryGrid.insertAdjacentHTML("beforeend", cardHTML);
            });
        } else {
            // MODE FOTO LANGSUNG
            galleryData.forEach((item, index) => {
                const aosDelay = (index % 4) * 100;

                const cardHTML = `
                    <div class="gallery-card group" data-aos="zoom-in-up" data-aos-delay="${aosDelay}">
                        <img src="${item.src}" alt="${item.alt}" class="gallery-img" loading="lazy">
                        <div class="card-overlay">
                            <div class="overlay-content text-left">
                                <div class="flex items-center justify-between mb-2">
                                    <span class="text-[10px] font-bold tracking-widest uppercase bg-blue-600/90 text-white px-2.5 py-1 rounded-md shadow-sm">VIEW</span>
                                    <i class="bi bi-arrow-up-right-circle text-xl text-blue-400 opacity-80 group-hover:opacity-100 transition-opacity"></i>
                                </div>
                                <p class="text-sm font-semibold tracking-wide text-white line-clamp-2">${item.alt}</p>
                            </div>
                        </div>
                    </div>
                `;
                galleryGrid.insertAdjacentHTML("beforeend", cardHTML);
            });
        }
    } else if (galleryGrid) {
        galleryGrid.innerHTML = `<p class="col-span-full text-center text-gray-500 py-12">Belum ada foto di halaman ini.</p>`;
    }

    // Inisialisasi Ulang AOS Setelah Elemen Selesai Dibuat
    setTimeout(() => {
        if (typeof AOS !== 'undefined') {
            AOS.init({ duration: 800, once: true });
        }
    }, 150);

    // 3. KONTROLLER KLIK KARTU & LIGHTBOX MODAL MODERN
    document.addEventListener("click", function(e) {
        // Klik pada Kartu Proker
        const prokerCard = e.target.closest(".proker-card");
        if (prokerCard) {
            const pIdx = prokerCard.getAttribute("data-proker-index");
            const proker = galleryData[pIdx];
            if (proker) {
                if (proker.photos && proker.photos.length > 0) {
                    // Buka foto pertama di lightbox
                    lightbox.style.display = "flex";
                    lightboxImg.src = proker.photos[0].src;
                    lightboxImg.alt = proker.photos[0].alt;
                    caption.innerText = `${proker.title} (${proker.photos.length} Foto)`;
                    document.body.style.overflow = "hidden";
                } else {
                    alert(`Belum ada foto di folder proker "${proker.title}".\nSilakan masukkan foto ke folder: img/gallery/.../${proker.folder}/`);
                }
            }
            return;
        }

        // Klik pada Foto Langsung
        const card = e.target.closest(".gallery-card");
        if (!card) return;

        const img = card.querySelector(".gallery-img");
        if (img) {
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            caption.innerText = img.alt;
            document.body.style.overflow = "hidden"; 
        }
    });

    // Fungsi Menutup Lightbox
    function closeLightbox() {
        lightbox.style.display = "none";
        document.body.style.overflow = "auto"; 
    }

    // Event Tutup via Tombol X
    if (closeBtn) {
        closeBtn.addEventListener("click", closeLightbox);
    }

    // Event Tutup via Klik Area Kosong di Sekitar Frame Foto
    lightbox.addEventListener("click", function(e) {
        if (e.target === lightbox || e.target.classList.contains('lightbox-wrapper')) {
            closeLightbox();
        }
    });

    // Menutup Lightbox dengan tombol 'Escape' di Keyboard
    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape" && lightbox.style.display === "flex") {
            closeLightbox();
        }
    });
});