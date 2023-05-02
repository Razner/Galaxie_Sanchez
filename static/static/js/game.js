import { Vessel } from "../js/vessel.js";

let vessel = ""
document.getElementById("start-bnt").addEventListener("click", () => {
    vessel = new Vessel(document.getElementById("srcimg").innerHTML, document.getElementById("namevessel").innerHTML, document.getElementById("vesselsize").innerHTML);
    document.getElementById("game-vessel").src = vessel.imageSrc;
    document.getElementById("game-vessel").style.width = vessel.size + "px"; // définit la taille de l'image en pixels
    document.getElementById("Menu").style.display = "none";
    document.getElementById("game").style.display = "block";
  });
  

