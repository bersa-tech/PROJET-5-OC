// ETAPE 1 -------------------------------------------------------------------
// Metre le code HTML à jour, déclarer les constantes et variables
const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
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
// déclarer en constante les éléments HTML avec document.querySelector
const bannerImage = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");
const dotsContainer = document.querySelector(".dots");
const arrowNext = document.querySelector(".arrow_right");
const arrowPrev = document.querySelector(".arrow_left");

// Initialisation de l'index de la diapositive actuelle
let currentSlideIndex = 0;
// ETAPE 1 -------------------------------------------------------------------

// ETAPE 2 -------------------------------------------------------------------
// Ajout event listener sur les flèches gauche et droite, avec console.log et alert
// Ajout des Fonctions Slide suivante et précédente, ajout de updateSlide
arrowNext.addEventListener("click", nextSlide);
arrowPrev.addEventListener("click", prevSlide);

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  updateSlide(currentSlideIndex);
  // alert("Flèche droite cliquée");
}

function prevSlide() {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  updateSlide(currentSlideIndex);
  // console.log("Flèche gauche cliquée");
}
// ETAPE 2 -------------------------------------------------------------------

// ETAPE 3 -------------------------------------------------------------------
// Appelez la fonction pour créer les points
createDots();

// Fonction pour créer les points (dots) en fonction du nombre de diapositives
function createDots() {
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");
    dot.className = "dot";
    dot.addEventListener("click", () => updateSlide(i)); // Ajoutez un gestionnaire de clic pour chaque point
    dotsContainer.appendChild(dot); // Ajoutez le point au conteneur des points
  }
}
// ETAPE 3 -------------------------------------------------------------------

// ETAPE 4 & 5 -------------------------------------------------------------------
// Gestion de la première diapositive pour selectionner le premier point
updateSlide(currentSlideIndex);

// Met à jour la diapositive en fonction de l'index
function updateSlide(index) {
  const slide = slides[index];
  bannerImage.src = `./assets/images/slideshow/${slide.image}`;
  tagLine.innerHTML = slide.tagLine;

  // Met à jour les points du carrousel
  const dots = dotsContainer.querySelectorAll(".dot");
  dots.forEach((dot, dotIndex) => {
    if (dotIndex === index) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}
// ETAPE 4 & 5 -------------------------------------------------------------------
