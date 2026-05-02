document.addEventListener("DOMContentLoaded", function() {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close-btn");
    const galleryItems = document.querySelectorAll(".gallery-card");

    // Buka Lightbox saat foto diklik
    galleryItems.forEach(item => {
        item.addEventListener("click", function() {
            const imgSrc = this.querySelector("img").src;
            const imgAlt = this.querySelector("img").alt;
            
            lightbox.style.display = "flex";
            lightboxImg.src = imgSrc;
            document.getElementById("caption").innerText = imgAlt;
            document.body.style.overflow = "hidden"; // Disable scroll saat zoom
        });
    });

    // Tutup Lightbox saat tombol X diklik
    closeBtn.addEventListener("click", function() {
        lightbox.style.display = "none";
        document.body.style.overflow = "auto";
    });

    // Tutup Lightbox saat area hitam diklik
    lightbox.addEventListener("click", function(e) {
        if (e.target !== lightboxImg) {
            lightbox.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
});