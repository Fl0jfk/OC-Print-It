										/* VARIABLES */

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
const link = document.getElementsByClassName("dot");
const dotsClick1 = document.querySelector(".dot_1");
const dotsClick2 = document.querySelector(".dot_2");
const dotsClick3 = document.querySelector(".dot_3");
const dotsClick4 = document.querySelector(".dot_4");
let timerSlider = setInterval(timer, 3000);
let i = 0;

											/* FONCTIONS */

//Fonction reliant la class dot_selected à la slide en cours grâce au i
function linkDot(){
	for (let i = 0; i < slides.length; i++){
		link[i].classList.remove("dot_selected");		
	}
	link[i].classList.add("dot_selected");
}

//Fonction montrant l'image et sa tagline selon la const slides ci-dessus, i reçoit sa valeur selon un timer et d'autres fonnctions 
function showSlide() {
  	imageElement.src = `./assets/images/slideshow/${slides[i].image}`;
  	taglineElement.innerHTML = slides[i].tagLine;
  	linkDot();
}

//Fonction appelé dans un setInterval qui ajoute une valeur +1 à i
function timer (){
	i++;
	if (i >= slides.length) {
		i = 0;
	  }
	  showSlide();
}

											/* METHODES */

//Méthode déclenché par un click sur la class arrow_right, ajoute un +1 à i et retourne à 0 si elle dépasse le nombre de slide
arrowRight.addEventListener("click", function(){
	i++;
	clearInterval(timerSlider)
  	if (i >= slides.length) {
    	i = 0;
  	}
  	showSlide();
	timerSlider = setInterval(timer, 3000);
});

//Méthode déclenché par un click sur la class arrow_left, ajoute un +1 à i et retourne à 0 si elle dépasse le nombre de slide
arrowLeft.addEventListener("click", function() {
	i--;
	clearInterval(timerSlider);
  	if (i < 0) {
    	i = slides.length-1;
  	}
  	showSlide();
	timerSlider = setInterval(timer, 3000);
});

//Méthode déclenché par un click sur la class dot_1, modifie la valeur de i
dotsClick1.addEventListener("click", function() {
	clearInterval(timerSlider);
	i = 0;
	showSlide();
	timerSlider = setInterval(timer, 3000);
});

//Méthode déclenché par un click sur la class dot_2, modifie la valeur de i
dotsClick2.addEventListener("click", function() {
	clearInterval(timerSlider);
	i = 1;
	showSlide();
	timerSlider = setInterval(timer, 3000);
});

//Méthode déclenché par un click sur la class dot_3, modifie la valeur de i
dotsClick3.addEventListener("click", function() {
	clearInterval(timerSlider);
	i = 2;
	showSlide();
	timerSlider = setInterval(timer, 3000);
});

//Méthode déclenché par un click sur la class dot_4, modifie la valeur de i
dotsClick4.addEventListener("click", function() {
	clearInterval(timerSlider);
	i = 3;
	showSlide();
	timerSlider = setInterval(timer, 3000);
});