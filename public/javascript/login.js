const image = document.querySelector(".image-se");
const images = [
    {
        "img": "../public/img/default/screenshot1.png"
    },
    {
        "img": "../public/img/default/screenshot3.png"
    },
    {
        "img": "../public/img/default/screenshot4.png"
    },
];

let currentIndex = 0;

setInterval(() => {
    image.src = images[currentIndex].img;
    currentIndex = (currentIndex + 1) % images.length; // Increment index and wrap around if necessary
}, 3000);
