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