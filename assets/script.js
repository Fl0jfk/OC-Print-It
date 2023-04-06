const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelectorAll(".dot");
const imageElement = document.querySelector(".banner-img");
const taglineElement = document.querySelector(".tagline");

let slideActive = 0;

function showSlide() {
  imageElement.src = `./assets/images/slideshow/${slides[slideActive].image}`;
  taglineElement.innerHTML = slides[slideActive].tagLine;
}

arrowRight.addEventListener("click", () => {
  slideActive++;
  if (slideActive >= slides.length) {
    slideActive = 0;
  }
  showSlide();
});

arrowLeft.addEventListener("click", () => {
  slideActive--;
  if (slideActive < 0) {
    slideActive = slides.length-1;
  }
  showSlide();
});