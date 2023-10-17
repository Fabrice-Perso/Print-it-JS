// Récupérez les éléments des flèches par leur classe
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const bannerImage = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");

// Définissez un index initial pour suivre la diapositive actuelle
let currentIndex = 0;

const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Fonction pour mettre à jour l'image et le texte
function updateBanner() {
  bannerImage.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
  bannerText.innerHTML = slides[currentIndex].tagLine;
}

// Ajoutez un event listener pour la flèche gauche
arrowLeft.addEventListener("click", () => {
  // Décrémentez l'index pour afficher la diapositive précédente
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1; // Revenir à la dernière diapositive si nécessaire
  }
  updateBanner();
});

// Ajoutez un event listener pour la flèche droite (si nécessaire)
arrowRight.addEventListener("click", () => {
  // Incrémentez l'index pour afficher la diapositive suivante
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0; // Revenir à la première diapositive si nécessaire
  }
  updateBanner();
});

// Appelez la fonction pour afficher la première diapositive
updateBanner();
