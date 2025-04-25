//// This code will be used for the certificate images on the Home page ////

const overlay = document.getElementById("lightbox-overlay");
const lightboxImage = document.getElementById("lightbox-image");

const certificateImages = [
    "images/certificate1.png",
    "images/certificate2.png"
];
let currentImageIndex = 0;

function showImage(index) {
    currentImageIndex = index;
    lightboxImage.src = certificateImages[index];
    overlay.classList.add("active");
}

document.getElementById("c1").addEventListener("click", () => showImage(0));
document.getElementById("c2").addEventListener("click", () => showImage(1));

// Navigation buttons
document.getElementById("left-button").addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + certificateImages.length) % certificateImages.length;
    lightboxImage.src = certificateImages[currentImageIndex];
})
document.getElementById("right-button").addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % certificateImages.length;
    lightboxImage.src = certificateImages[currentImageIndex];
})

// Close button
document.getElementById("close").addEventListener("click", () => {
    overlay.classList.remove("active");
})

// ESC key to close
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        overlay.classList.remove("active");
    }
})

// clicking outside of box to close
document.addEventListener("click", (event) => {
    if (event.c === "Escape") {
        overlay.classList.remove("active");
    }
})

// // Download
// document.querySelector("a[download]").addEventListener("click", (event) => {
//     event.preventDefault();
//     const link = document.createElement("a");
//     link.href = `certificate${currentImageIndex + 1}.png`;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
// })

// plan: make it to where the images visually "scroll" quickly on and off screen when buttons are selected
// plan: there'll be a new button that adds a download button for the certificate

function downloadCertificate(uri, name) {
    const link = document.getElementById("download");
    link.download = name;
    link.href = uri;
    link.click();
}

right_Button.addEventListener("click", rightB_Function);
right_Button.addEventListener("keydown", rightB_Function);