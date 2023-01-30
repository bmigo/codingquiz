var timer = document.querySelector(".timer");
var startButton = document.querySelector(".startQuiz");
var quizBox = document.querySelector(".questions");

var secondsLeft = 75;
var deduction = 5;
var timerInterval;
var score = 0;
var questionsIndex = 0;



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
    startButton.disabled = true;
    playGame();
}

startButton.addEventListener("click", startGame);

var questions = [
    {
        q:"HELLOOOO",
        choices: ["A. BEE", "B. ", "C. ", "D. "],
        a:"",
    },
]

function playGame () {
    quizBox.textContent = "";
    for (var i=0; i<questions.length; i++){
        var gameQuestion = questions[questionsIndex].q;
        var choiceA = questions[questionsIndex].choices[0];
        var choiceB = questions[questionsIndex].choices[1];
        var choiceC = questions[questionsIndex].choices[2];
        var choiceD = questions[questionsIndex].choices[3];

        quizBox.innerHTML = gameQuestion + "<br />" + 
        choiceA + "<br />" + 
        choiceB + "<br />" + 
        choiceC + "<br />" + 
        choiceD + "<br />";
        

    }

    
}