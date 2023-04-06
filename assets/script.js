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
const imageElement = document.querySelector(".banner-img");
const taglineElement = document.querySelector(".tagline");
let timerSlider = setInterval(timer, 3000);
let i = 0;

function linkDot(){
	const link = document.getElementsByClassName("dot");
	for (let i = 0; i < slides.length; i++){
		link[i].classList.remove("dot_selected");		
	}
	link[i].classList.add("dot_selected");
}

function showSlide() {
  imageElement.src = `./assets/images/slideshow/${slides[i].image}`;
  taglineElement.innerHTML = slides[i].tagLine;
  linkDot();
}

function timer (){
	i++;
	if (i >= slides.length) {
		i = 0;
	  }
	  showSlide();
}

arrowRight.addEventListener("click", function(){
	i++;
	clearInterval(timerSlider)
  	if (i >= slides.length) {
    	i = 0;
  	}
  	showSlide();
	timerSlider = setInterval(timer, 3000);
});

arrowLeft.addEventListener("click", function() {
	i--;
	clearInterval(timerSlider)
  	if (i < 0) {
    	i = slides.length-1;
  	}
  	showSlide();
	timerSlider = setInterval(timer, 3000);
});