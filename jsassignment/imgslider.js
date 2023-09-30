const slides = document.querySelectorAll(".slider img");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let images = ["./image1.jpg","./image2.jpg","./image3.jpg","./image4.jpg","./image5.jpg"]
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.visibility = "visible";
        } else {
            slide.style.visibility = "hidden";
        }
    });
}
showSlide(currentSlide);

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}
