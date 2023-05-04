import { Vessel } from "../js/vessel.js";
import { Laser } from "../js/laser.js";

let vessel = ""
document.getElementById("start-bnt").addEventListener("click", () => {
    vessel = new Vessel(document.getElementById("srcimg").innerHTML,document.getElementById("namevessel").innerHTML );
    console.log(vessel);
    document.getElementById("game-vessel").src = vessel.imageSrc;
    document.getElementById("Menu").style.display = "none";
    document.getElementById("game").style.display = "block";
});

let laser = ""
document.getElementById("start-bnt").addEventListener("click", () => {
    laser = new Laser(document.getElementById("srcimg").innerHTML,document.getElementById("namelaser").innerHTML );
    console.log(laser);
    document.getElementById("game-laser").src = laser.imageSrc;
    document.getElementById("Menu").style.display = "none";
    document.getElementById("game").style.display = "block";
});

// Initialisation du canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Définition des astéroïdes
const asteroids = [];
const ASTEROID_RADIUS = 30;
const MAX_ASTEROIDS = Infinity;

// Création de l'image d'astéroïde
const asteroidImg = new Image();
asteroidImg.src = '/images/asteroid.png';

// Variables du jeu
const score = 0;
let level = 1;
let asteroidSpeed = 1;

// Classe pour les astéroïdes
class Asteroid {
  constructor(x, y, dx, dy, radius, img) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.img = img;
  }

  // Fonction qui dessine l'astéroïde
  draw() {
    ctx.beginPath();
    ctx.drawImage(this.img, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
    ctx.closePath();
  }

  // Fonction qui met à jour la position de l'astéroïde
  update() {
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }
}

// Fonction qui crée un astéroïde aléatoirement
function createAsteroid() {
  const x = Math.random() * canvas.width;
  const y = -ASTEROID_RADIUS;
  const dx = Math.random() * 4 - 2; // Vitesse horizontale aléatoire entre -2 et 2
  const dy = asteroidSpeed; // Vitesse verticale en fonction du niveau
  const asteroid = new Asteroid(x, y, dx, dy, ASTEROID_RADIUS, asteroidImg);
  asteroids.push(asteroid);
}

// Fonction qui anime le jeu
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Met à jour et dessine tous les astéroïdes
  asteroids.forEach(asteroid => {
    asteroid.update();
  });

  // Vérifie si un astéroïde est sorti de l'écran et le supprime
  asteroids.forEach((asteroid, index) => {
    if (asteroid.y > canvas.height + ASTEROID_RADIUS) {
      asteroids.splice(index, 1);
    }
  });

  // Augmente le niveau en fonction du score et de la durée de la partie
  level = Math.floor(score / 10) + 1;
  asteroidSpeed = level;

  // Crée un nouvel astéroïde aléatoirement toutes les 500 millisecondes
  if (Date.now() % 500 < 20 && asteroids.length < MAX_ASTEROIDS) {
    createAsteroid();
  }
}

// Démarre le jeu
animate();