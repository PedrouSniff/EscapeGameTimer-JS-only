// TIMER //

const timerElement = document.getElementById("timer");
let tempsStocke = localStorage.getItem("timer");

if (tempsStocke === null) {
    tempsStocke = 300;
    localStorage.setItem("timer", tempsStocke);
}

let temps = parseInt(tempsStocke, 10);

// mm:ss
function afficherTemps(secondes) {
    let minutes = Math.floor(secondes / 60);
    let resteSecondes = secondes % 60;

    if (minutes < 10) {
        minutes = "0" + minutes
    };
    if (resteSecondes < 10) {
        resteSecondes = "0" + resteSecondes
    };

    return minutes + ":" + resteSecondes;
}

// mise à jour temps
let timer = setInterval(function () {

    if (temps <= 0) {
        clearInterval(timer);
        timerElement.textContent = "00:00";
        document.getElementById("message").innerHTML =
            "<h3>Temps écoulé ! Vous avez perdu !</h3>";
        return;
    }

    timerElement.textContent = afficherTemps(temps);
    temps--;
    localStorage.setItem("timer", temps);

}, 1000);


// MOT DE PASSE //

if (localStorage.getItem("mdp") === null) {
    localStorage.setItem("mdp", "escape2024");
}

let motDePasse = localStorage.getItem("mdp");
let inputs = document.querySelectorAll(".mdpCase");


// Navigation automatique entre les cases
for (let i = 0; i < inputs.length; i++) {

    inputs[i].addEventListener("input", function () {
        inputs[i].value = inputs[i].value.toLowerCase();

        if (inputs[i].value !== "" && inputs[i + 1]) {
            inputs[i + 1].focus();
        }
    });

    // Retour arrière avec backspace
    inputs[i].addEventListener("keydown", function (event) {
        if (event.key === "Backspace" && inputs[i].value === "" && inputs[i - 1]) {
            inputs[i - 1].focus();
        }
    });
}


// Vérification du mot de passe
document.getElementById("mdpbutton").addEventListener("click", function () {

    let saisie = "";

    for (let i = 0; i < inputs.length; i++) {
        saisie += inputs[i].value;
    }

    if (saisie === motDePasse) {
        clearInterval(timer);
        localStorage.removeItem("timer");

        document.getElementById("message").innerHTML =
            "<h2>Bravo ! Vous avez réussi.</h2>";
    } else {
        document.getElementById("message").innerHTML =
            "<p>Mauvais mot de passe !</p>";
    }
});
