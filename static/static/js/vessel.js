const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
// Classe Vessel
export class Vessel {
    constructor() {
      this.position = {
        x: 200,
        y: 200,
      };
      this.velocity = {
        x: 0,
        y: 0,
      };
      //this.image = 
      this.imageSrc = 
      
    }
  }
  
  /*// Tableau de vaisseaux
  const vessels = [
    new Vessel("Vaisseau 1", "/images/vessel.png", 150),
    new Vessel("Vaisseau 2", "/images/vessel2.png", 90),
    new Vessel("Vaisseau 3", "/images/vessel3.png", 90),
  ];
  
  
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
 
*/