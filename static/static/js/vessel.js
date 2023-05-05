// Classe Vessel
export class Vessel {
  constructor(name, imageSrc, size) {
    this.name = name;
    this.imageSrc = imageSrc;
    this.size = size;
  }
}

// Tableau de vaisseaux
const vessels = [
  new Vessel("Vaisseau 1", "/images/vessel.png", 160),
  new Vessel("Vaisseau 2", "/images/vessel2.png", 110),
  new Vessel("Vaisseau 3", "/images/vessel3.png", 110),
];

// Variables pour la sélection de vaisseau
let currentVesselIndex = 0
const vesselImg = document.getElementById("vessel-img");
const vesselPrevBtn = document.getElementById("vessel-prev-btn");
const vesselNextBtn = document.getElementById("vessel-next-btn");

// Fonction pour démarrer le jeu
function startGame() {
  const canvas = document.getElementById("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.position = "absolute";
  const vessel = vessels[currentVesselIndex];
  const vesselX = (canvas.width - vessel.size) / 2;
  const vesselY = canvas.height - vessel.size;
  
  // Dessiner le vaisseau aux coordonnées x et y
  const ctx = canvas.getContext("2d");
  const vesselImage = new Image();
  vesselImage.src = vessel.imageSrc;
  vesselImage.onload = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Effacer le contenu du canvas
    ctx.drawImage(vesselImage, vesselX, vesselY, vessel.size, vessel.size);
  };
}

// Fonction pour changer de vaisseau
function updateVessel() {
  const currentVessel = vessels[currentVesselIndex];
  vesselImg.src = currentVessel.imageSrc;
  vesselImg.style.width = currentVessel.size + "px"; // définir la taille de l'image
  document.getElementById("srcimg").innerHTML = currentVessel.name;
  document.getElementById("namevessel").innerHTML = currentVessel.imageSrc;

  startGame();
}

// Gestionnaires d'événements pour les flèches de sélection de vaisseau
vesselPrevBtn.addEventListener("click", () => {
  currentVesselIndex--;
  if (currentVesselIndex < 0) {
    currentVesselIndex = vessels.length - 1;
  }
  updateVessel();
});

vesselNextBtn.addEventListener("click", () => {
  currentVesselIndex++;
  if (currentVesselIndex >= vessels.length) {
    currentVesselIndex = 0;
  }
  updateVessel();
});

updateVessel();