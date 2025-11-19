const timerElement = document.getElementById('timer');
let temps = 15  ;

function updateTimer() {
    let minutes = parseInt(temps / 60, 10);
    let secondes = parseInt(temps % 60, 10);

    timerElement.textContent = minutes + ":" + secondes;
    temps--;    

    if (secondes < 10) {
        timerElement.textContent = minutes + ":0" + secondes;
    }

    if (minutes < 10) {
        timerElement.textContent = "0" + minutes + ":" + secondes;
    }

    if (temps <= 0 ) {
        clearInterval();
        timerElement.textContent = "00:00";
    }
}

setInterval(updateTimer,1000)