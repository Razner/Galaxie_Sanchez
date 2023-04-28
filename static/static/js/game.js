import { Vessel } from "../js/vessel.js";

let vessel = ""
document.getElementById("start-bnt").addEventListener("click", () => {
    vessel = new Vessel(document.getElementById("srcimg").innerHTML,document.getElementById("namevessel").innerHTML );
    console.log(vessel);
    document.getElementById("game-vessel").src = vessel.imageSrc;
    document.getElementById("Menu").style.display = "none";
    document.getElementById("game").style.display = "block";
})