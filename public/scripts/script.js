//// Certificate images on the Home page ////

const homeOverlay = document.getElementById("lightbox-overlay");
const lightboxImage = document.getElementById("lightbox-image");

const certificateImages = [
    "images/certificate1.png",
    "images/certificate2.png"
];
let currentImageIndex = 0;

function showImage(index) {
    currentImageIndex = index;
    lightboxImage.src = certificateImages[index];
    homeOverlay.classList.add("active");
}

function closeLightbox() {
    homeOverlay.classList.remove("active");
}

document.getElementById("c1").addEventListener("click", () => showImage(0));
document.getElementById("c2").addEventListener("click", () => showImage(1));

// Navigation buttons = currently broken :(
document.getElementById("left-button").addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + certificateImages.length) % certificateImages.length;
    lightboxImage.src = certificateImages[currentImageIndex];
})
document.getElementById("right-button").addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % certificateImages.length;
    lightboxImage.src = certificateImages[currentImageIndex];
})

// Close button
document.getElementById("close").addEventListener("click", closeLightbox)

// ESC key and clicking outside of zoomed image to close
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeLightbox();
});

homeOverlay.addEventListener("click", (event) => {
    if (event.target === homeOverlay) closeLightbox();
});

//// Projects images when you click on them ////

const projectsOverlay = document.getElementById("projects-overlay");