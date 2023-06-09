// Classe Laser
export class Laser {
  constructor(name, imageSrc, size) {
    this.name = name;
    this.imageSrc = imageSrc;
    this.size = size;
  }
}
  
  // Tableau de lasers
  const lasers = [
    new Laser("Laser 1", "/images/laser1.png", 100),
    new Laser("Laser 2", "/images/laser2.png", 20),
    new Laser("Laser 3", "/images/laser3.png", 30),
  ];
  
  // Variables pour la sélection de laser
  let currentLaserIndex = 0
  const laserImg = document.getElementById("laser-img");
  const laserPrevBtn = document.getElementById("laser-prev-btn");
  const laserNextBtn = document.getElementById("laser-next-btn");
  

  
  // Fonction pour changer de laser
  function updateLaser() {
    const currentLaser = lasers[currentLaserIndex];
    laserImg.src = currentLaser.imageSrc;
    laserImg.style.width = currentLaser.size + "px";
    document.getElementById("srcimg").innerHTML = currentLaser.name;
    document.getElementById("namelaser").innerHTML = currentLaser.imageSrc;
  }
  
  // Gestionnaires d'événements pour les flèches de sélection de laser
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