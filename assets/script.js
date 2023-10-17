// Déclaration des élèments à récupérér pour le carroussel
//// Flèche
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
//// Image
const bannerImage = document.querySelector(".banner-img");
//// Texte
const bannerText = document.querySelector("#banner p");
//// Bullet Point
const dots = document.querySelectorAll(".dot");
//// Déclaration d'un tableau pour gérer les différents images et le texte associé
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

// Déclaration index initial pour suivre la diapositive actuelle
let currentIndex = 0;

// Fonction MAJ de l'image et le texte
function updateBanner() {
  //Déclaration du chemin de l'image et du texte associé avec une variable "currentIndex" pour effectuer le changement
  bannerImage.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
  bannerText.innerHTML = slides[currentIndex].tagLine;

  // MAJ de la classe des bullet points
  dots.forEach((dot, index) => {
    // si la valeur de l'index=currentindex(numero du selectionné)
    if (index === currentIndex) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}

// Gestionnaire d'événement pour les bullets points
dots.forEach((dot, index) => {
  //action lors d'un click sur un bullet point
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateBanner();
  });
});

// Action sur la fleche gauche lors du click
arrowLeft.addEventListener("click", () => {
  // Décrémente l'index pour afficher la diapositive précédente
  currentIndex--;
  //si on passe en negatif on repart au numero le plus grand-1 car ca commence à 0
  if (currentIndex < 0) {
    currentIndex = slides.length - 1; // Revenir à la dernière diapositive si nécessaire
  }
  updateBanner();
});

// Action sur la fleche droite lors du click
arrowRight.addEventListener("click", () => {
  // Incrémentez l'index pour afficher la diapositive suivante
  currentIndex++;
  //si on passe depasse le nombre d'image, on repart à la premiere a la position 0
  if (currentIndex >= slides.length) {
    currentIndex = 0; // Revenir à la première diapositive si nécessaire
  }
  updateBanner();
});

// Appelez la fonction pour afficher la première diapositive
updateBanner();
