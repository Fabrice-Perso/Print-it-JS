// Déclaration des élèments à récupérér pour le carroussel
//// Flèche
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
//// Image
const bannerImage = document.querySelector(".banner-img");
//// Texte
const bannerText = document.querySelector("#banner p");
//// Bullet Point
const dotsContainer = document.getElementById("dots-container");
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

//Generation des dots selon le nombre de slide dans le tableau
slides.forEach((slides, index) => {
  // console.log("slides", slides);
  const dot = document.createElement("div");
  dot.classList.add("dot");

  // Gestionnaire d'événement pour les bullets points
  dot.addEventListener("click", () => {
    // Réinitialisez l'intervalle en effaçant l'intervalle actuel et en démarrant un nouveau
    clearInterval(autoSlideInterval);
    startAutoSlide();

    currentIndex = index;
    updateBanner();
  });

  // Ajout du dot au conteneur
  dotsContainer.appendChild(dot);

  // Ajout de la classe dot_selected au premier dot (index 0)
  if (index === 0) {
    dot.classList.add("dot_selected");
  }
});

// Action sur la fleche gauche lors du click
arrowLeft.addEventListener("click", () => {
  // Réinitialisez l'intervalle en effaçant l'intervalle actuel et en démarrant un nouveau
  clearInterval(autoSlideInterval);
  startAutoSlide();

  // Décrémente l'index pour afficher la diapositive précédente
  currentIndex--;
  // Si on passe en négatif, on repart au numéro le plus élevé - 1 car cela commence à 0
  if (currentIndex < 0) {
    currentIndex = slides.length - 1; // Revenir à la dernière diapositive si nécessaire
  }
  updateBanner();
});

// Action sur la fleche droite lors du click
arrowRight.addEventListener("click", () => {
  // Réinitialisez l'intervalle en effaçant l'intervalle actuel et en démarrant un nouveau
  clearInterval(autoSlideInterval);
  startAutoSlide();

  // Incrémente l'index pour afficher la diapositive suivante
  currentIndex++;
  // Si on dépasse le nombre d'images, on repart à la première à la position 0
  if (currentIndex >= slides.length) {
    currentIndex = 0; // Revenir à la première diapositive si nécessaire
  }
  updateBanner();
});

// Fonction MAJ du slide
function updateBanner() {
  //Déclaration du chemin de l'image et du texte associé avec une variable "currentIndex" pour effectuer le changement
  bannerImage.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
  bannerText.innerHTML = slides[currentIndex].tagLine;

  // MAJ de la sélection du dot
  const dots = document.querySelectorAll(".dots .dot"); // on redéclare la variable pour l'actualiser suite à la création  des dots
  // console.log("dots apres", dots);
  dots.forEach((dot, index) => {
    // console.log("Inside forEach Loop");
    // si la valeur de l'index dans le tableau est égale à currentIndex (numéro de la diapositive sélectionnée)
    if (index === currentIndex) {
      dot.classList.add("dot_selected");
      // console.log(`Dot ${index} is selected`);
    } else {
      dot.classList.remove("dot_selected");
      // console.log(`Dot ${index} is not selected`);
    }
  });
}

// Appelez la fonction pour afficher la première diapositive
updateBanner();

// Déclarez l'intervalle à l'échelle globale
let autoSlideInterval;

// Fonction pour démarrer l'intervalle de changement automatique des images
function startAutoSlide() {
  // Déclaration d'un intervalle pour changer d'image toutes les x secondes (x000 millisecondes).
  let secondsRemaining = 10; // Initialise le compteur à 10 secondes

  autoSlideInterval = setInterval(() => {
    // console.log(`Changement d'image dans ${secondsRemaining} secondes`);
    secondsRemaining--;

    // Si les secondes atteignent 0, changez d'image et réinitialisez le compteur
    if (secondsRemaining === 0) {
      secondsRemaining = 10; // Réinitialisez le compteur à 10 secondes

      // Incrémente l'index pour passer à la diapositive suivante
      currentIndex++;
      // Si on dépasse le nombre d'images, on repart à la première à la position 0
      if (currentIndex >= slides.length) {
        currentIndex = 0;
      }
      updateBanner(); // MAJ du carrousel avec la nouvelle image.
    }
  }, 1000); // Déclaration de l'intervalle à 1000 millisecondes (1 seconde).
}

//declenche la fonction au chargement de la page
startAutoSlide();
