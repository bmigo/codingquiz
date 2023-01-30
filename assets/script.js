var timer = document.querySelector(".timer");
var startButton = document.querySelector(".startQuiz");

var secondsLeft = 75;
var timerInterval;

function setTimer() {
    timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft + " seconds left!";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            //new screen
        }
    }, 1000);
}

function startGame () {
    setTimer();
}

startButton.addEventListener("click", startGame);