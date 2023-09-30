const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let images = [
  "./image1.jpg",
  "./image2.jpg",
  "./image3.jpg",
  "./image4.jpg",
  "./image5.jpg",
];
let currentSlide = 0;
const sliderElement = document.getElementById("curr_slider_image");
function nextSlide() {
  currentSlide = (currentSlide + 1) % images.length;
  console.log(currentSlide);
  sliderElement.src = images[currentSlide];
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + images.length) % images.length;
  sliderElement.src = images[currentSlide];
}
