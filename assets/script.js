// Minuteur
const timerElement = document.getElementById('timer');
let temps = localStorage.getItem('timer');

if (!temps) {
    temps = 300;
    localStorage.setItem('timer', temps);
}else {
    temps = parseInt(temps, 10);
}

function updateTimer() {
    let minutes = parseInt(temps / 60, 10);
    let secondes = parseInt(temps % 60, 10); 

    let m = minutes;
    let s = secondes;

    if (secondes < 10) {
        s = "0" + secondes;
    }

    if (minutes < 10) {
        m = "0" + minutes;
    }  

    if (temps <= 0 ) {
        clearInterval(timer);
        timerElement.textContent = "00:00";
        document.getElementById('message').innerHTML='<h2>Temps écoulé ! Vous avez perdu !</h2>';
        return;
    }

    timerElement.textContent = m + ":" + s;
    temps--; 
};

let timer = setInterval(updateTimer,1000);


// Vérification du mot de passe
if (!localStorage.getItem("mdp")) {
    localStorage.setItem("mdp", "escape1234");
}

document.getElementById('mdpbutton').addEventListener('click', function() {
    const inputMdp = document.getElementById('mdpInput').value;
    const mdpStorage = localStorage.getItem('mdp');

    if (inputMdp === mdpStorage) {
        clearInterval(timer)
        document.getElementById('message').innerHTML = "<h2>Bravo ! Vous avez réussi.</h2>";
    } else {
        document.getElementById('message').innerHTML = "<p>Mauvais mot de passe !</p>";
    }
});