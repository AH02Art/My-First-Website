//// This codet will be used for the certificate images on the Home page ////

const c1 = document.getElementById("c1").addEventListener("click", (event) => {
    console.log("Image 1");
});
const c2 = document.getElementById("c2").addEventListener("click", (event) => {
    console.log("Image 2");
});

const left_Button = document.getElementById("left-button");
const right_Button = document.getElementById("right-button");

function leftB_Function(event) {
    if (event.type === "click") {
        console.log("Left Button clicked!");
    } else if (event.type === "keydown") {
        if (event.key === "ArrowLeft") {
            console.log("Left Arrow pressed!");  
        }
    }
}

left_Button.addEventListener("click", leftB_Function);
left_Button.addEventListener("keydown", leftB_Function);

function rightB_Function(event) {
    if (event.type === "click") {
        console.log("Right Button clicked!");
    } else if (event.type === "keydown") {
        if (event.key === "ArrowRight") {
            console.log("Right Arrow pressed!");  
        }
    }
}

right_Button.addEventListener("click", rightB_Function);
right_Button.addEventListener("keydown", rightB_Function);