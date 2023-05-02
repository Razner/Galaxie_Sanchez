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
    new Vessel("Vaisseau 1", "/images/vessel.png", 150),
    new Vessel("Vaisseau 2", "/images/vessel2.png", 90),
    new Vessel("Vaisseau 3", "/images/vessel3.png", 90),
  ];
  
  // Variables pour la sélection de vaisseau
  let currentVesselIndex = 0
  const vesselImg = document.getElementById("vessel-img");
  const vesselPrevBtn = document.getElementById("vessel-prev-btn");
  const vesselNextBtn = document.getElementById("vessel-next-btn");
  

  
  // Fonction pour changer de vaisseau
  function updateVessel() {
    const currentVessel = vessels[currentVesselIndex];
    vesselImg.src = currentVessel.imageSrc;
    vesselImg.style.width = currentVessel.size + "px";
    document.getElementById("srcimg").innerHTML = currentVessel.name;
    document.getElementById("namevessel").innerHTML = currentVessel.imageSrc;
    document.getElementById("vesselsize").innerHTML = currentVessel.size;
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
 