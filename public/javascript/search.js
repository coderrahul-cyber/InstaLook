const sbtn = document.querySelector(".search");
const left = document.querySelector('.left');
const icon = document.querySelectorAll('.icon span');
const parentic = document.querySelectorAll('.icon');
const last = document.querySelector(".last");
const ser = document.querySelector(".seee");
const insta = document.querySelector(".logo img");


let isChanged = false;

function changesAfterClick() {
    if (!isChanged) {
        console.log("clicked");
        insta.src = "../public/img/default/download.png";
        insta.style.width = "30px";
        icon.forEach((icon) => {
            icon.style.display = "none";
        });
        insta.style.marginBottom = "20px";
        left.style.flexDirection = "row";
        last.style.display = "none";
        left.style.width = "5%";
        left.style.border = "none";

        ser.style.display = "block";
        parentic.forEach((icon) => {
            icon.style.width = "40px";
        });
        isChanged = true;
    } else {
        // Restore default styles
        insta.src = "../public/img/default/logo.png"; 
        icon.forEach((icon) => {
            icon.style.display = "block";
        });
        insta.style.width = "";
        insta.style.marginBottom = ""; 
        left.style.flexDirection = ""; 
        last.style.display = ""; 
        left.style.width = ""; 
        left.style.border = "";

        ser.style.display = "none"; 
        parentic.forEach((icon) => {
            icon.style.width = ""; 
        });
        isChanged = false;
    }
}

sbtn.addEventListener("click", () => {
    changesAfterClick();
});


