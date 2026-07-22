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

    // 2. GENERATE GRID FOTO DINAMIS SECARA OTOMATIS
    if (galleryGrid && galleryData.length > 0) {
        galleryGrid.innerHTML = ""; 
        
        galleryData.forEach((item, index) => {
            // Efek delay bertingkat untuk AOS (Staggered Animation Effect)
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
    } else if (galleryGrid) {
        galleryGrid.innerHTML = `<p class="col-span-full text-center text-gray-500 py-12">Belum ada foto di halaman ini.</p>`;
    }

    // Inisialisasi Ulang AOS Setelah Elemen Selesai Dibuat
    setTimeout(() => {
        if (typeof AOS !== 'undefined') {
            AOS.init({ duration: 800, once: true });
        }
    }, 150);

    // 3. KONTROLLER LIGHTBOX MODAL MODERN
    document.addEventListener("click", function(e) {
        const card = e.target.closest(".gallery-card");
        if (!card) return;

        const img = card.querySelector(".gallery-img");
        if (img) {
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            caption.innerText = img.alt;
            
            // Mengunci scroll body agar halaman belakang tidak ikut bergerak
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