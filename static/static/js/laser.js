// Classe Vessel
export class Laser {
    constructor(name, imageSrc) {
      this.name = name;
      this.imageSrc = imageSrc;
    }
  }
  
  // Tableau de vaisseaux
  const lasers = [
    new Laser("Laser 1", "/images/laser1.png"),
    new Laser("Laser 2", "/images/laser2.png"),
    new Laser("Laser 3", "/images/laser3.png"),
  ];
  
  // Variables pour la sélection de vaisseau
  let currentLaserIndex = 0
  const laserImg = document.getElementById("laser-img");
  const laserPrevBtn = document.getElementById("laser-prev-btn");
  const laserNextBtn = document.getElementById("laser-next-btn");
  

  
  // Fonction pour changer de vaisseau
  function updateLaser() {
    const currentLaser = lasers[currentLaserIndex];
    laserImg.src = currentLaser.imageSrc;
    document.getElementById("srcimg").innerHTML = currentLaser.name;
    document.getElementById("namelaser").innerHTML = currentLaser.imageSrc;
  }
  
  // Gestionnaires d'événements pour les flèches de sélection de vaisseau
  laserPrevBtn.addEventListener("click", () => {
    currentLaserIndex--;
    if (currentLaserIndex < 0) {
      currentLaserIndex = lasers.length - 1;
    }
    updateLaser();
  });
  
  laserNextBtn.addEventListener("click", () => {
    currentLaserIndex++;
    if (currentLaserIndex >= lasers.length) {
      currentLaserIndex = 0;
    }
    updateLaser();
    });
    updateLaser();