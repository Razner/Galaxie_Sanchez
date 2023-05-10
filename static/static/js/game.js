import { Vessel } from "../js/vessel.js";
import { Laser } from "../js/laser.js";

let vessel = ""
document.getElementById("start-bnt").addEventListener("click", () => {
    vessel = new Vessel(document.getElementById("srcimg").innerHTML, document.getElementById("namevessel").innerHTML, document.getElementById);
    document.getElementById("game-vessel").src = vessel.imageSrc;
    document.getElementById("game-vessel").style.width = vessel.size + "px";
    document.getElementById("game-vessel").style.width = "100px"; 
    document.getElementById("Menu").style.display = "none";
    document.getElementById("game").style.display = "block";
  });

let laser = ""
document.getElementById("start-bnt").addEventListener("click", () => {
    laser = new Laser(document.getElementById("srcimg").innerHTML,document.getElementById("namelaser").innerHTML );
    document.getElementById("game-laser").src = laser.imageSrc;
    document.getElementById("game-laser").style.width = vessel.size + "px";
    document.getElementById("game-laser").style.width = "20px"; laser
    document.getElementById("Menu").style.display = "none";
    document.getElementById("game").style.display = "block";
});

