//// Image Pop-up functionality for both the Home & Projects Pages ////
const imageOverlay = document.getElementById("image-overlay");
const overlayImage = document.getElementById("overlay-image");
const closeButton = document.getElementById("close");
const leftButton = document.getElementById("left-button");
const rightButton = document.getElementById("right-button");
const downloadButton = document.getElementById("download");
const emailButton = document.getElementById("copy-email");

const imageGroups = {
    certificate: [
        "images/certificate1.png",
        "images/certificate2.png"
    ],
    projects: [
        "images/learnercards.jpg",
        "images/starwarscharacters.jpg",
        "images/thegrid.jpg",
        "images/pizzaapp.jpg",
        "images/articlesapp.jpg",
        "images/projects.jpg",
        "images/asylumlandingpage.jpg",
        "images/asylumgraphspage.jpg",
        "images/asylumprofilepage.jpg"
    ]
};
let currentGroup = "";
let currentIndex = 0;

function showOverlay(group, index) {
    currentGroup = group;
    currentIndex = index;
    overlayImage.src = imageGroups[group][index];
    imageOverlay.classList.add("active");

    if (group === "certificate") {
        downloadButton.style.display = "inline-block";
    } else {
        downloadButton.style.display = "none";
    }
}

function closeOverlay() {
    imageOverlay.classList.remove("active");
}

function showNextImage(step) {
    const groupArray = imageGroups[currentGroup];
    currentIndex = (currentIndex + step + groupArray.length) % groupArray.length;
    overlayImage.src = groupArray[currentIndex];
}

document.querySelectorAll("[data-group]").forEach((img) => {
    img.addEventListener("click", () => {
        const group = img.getAttribute("data-group");
        const index = parseInt(img.getAttribute("data-index"));
        showOverlay(group, index);
    });
})
leftButton.addEventListener("click", () => showNextImage(-1));
rightButton.addEventListener("click", () => showNextImage(1));
closeButton.addEventListener("click", closeOverlay);

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") showNextImage(-1);
});
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") showNextImage(1);
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeOverlay();
});

imageOverlay.addEventListener("click", (event) => {
    if (event.target === imageOverlay) closeOverlay();
});

//// email link copying feature ////
document.addEventListener("DOMContentLoaded", function() {
    if (emailButton) {
        emailButton.addEventListener("click", function() {
            const email = emailButton.textContent.trim()
            console.log ("Email ===> ", email);
            navigator.clipboard.writeText(email)
                .then(() => console.log("Email copied to clipboard!"))
                .catch(() => console.error("Failed to copy email: ", error));
        })
    }
})