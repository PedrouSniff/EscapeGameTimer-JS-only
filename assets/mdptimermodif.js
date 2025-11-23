// Modification du mot de passe et du timer
document.getElementById("saveMdp").addEventListener("click", modifierMDPTimer);

let mdpActuel = localStorage.getItem("mdp");
let timerSec = parseInt(localStorage.getItem("timer"));

let minutes = (timerSec - (timerSec % 60)) / 60;
let secondes = timerSec % 60;

if (minutes < 10) minutes = "0" + minutes;
if (secondes < 10) secondes = "0" + secondes;

document.getElementById("mdpActuel").textContent = mdpActuel;
document.getElementById("timerActuel").textContent = minutes + ":" + secondes;


function modifierMDPTimer() {
    const newMdp = document.querySelector("#nouveauMdp").value;
    const newTimer = document.querySelector("#nouveauTimer").value;

    if (newMdp) localStorage.setItem("mdp", newMdp);
    if (newTimer && newTimer > 0) localStorage.setItem("timer", newTimer);

    document.querySelector("#confirmation").textContent = "Mot de passe et timer modifié !";

    let t = parseInt(localStorage.getItem("timer"));
    let m = (t - (t % 60)) / 60;
    let s = t % 60;

    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;

    document.getElementById("timerActuel").textContent = m + ":" + s;

    document.getElementById("mdpActuel").textContent = localStorage.getItem("mdp");
}