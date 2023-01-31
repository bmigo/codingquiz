var timer = document.querySelector(".timer");
var startButton = document.querySelector(".startQuiz");
var quizBox = document.querySelector(".answers");
var quizQuestion = document.querySelector(".questions");
var buttons = document.getElementById("#answers");

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
            endGame();
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
        q:"Which of the following is not a JavaScript data type?",
        choices: ["A. String", "B. Number", "C. Boolean", "D. Symbolic"],
        a:"D. Symbolic",
    },
    {
        q:"What is the name of the behavior in which JavaScript moves all variable and function declarations to the top?",
        choices: ["A. Flagging", "B. Hoisting", "C. Debugging", "D. Inheritance"],
        a:"B. Hoisting",
    },

    {
        q:"Which comparison operator returns false if the two variables compared are of the same value but not the same type?",
        choices: ["A. =", "B. ==", "C. ===", "D. !="],
        a:"C. ===",
    },

    {
        q:"1. Primitive data types are passed by value. 2. Non-primitive data types are passed by reference.",
        choices: ["A. Neither statement is true", "B. Both statements are true", "C. Statement 1 is true", "D. Statement 2 is true"],
        a:"B. Both statements are true",
    },

    {
        q:"Functions that operate on other functions are called:",
        choices: ["A. Higher-Order", "B. Important", "C. Parents", "D. Noble"],
        a:"A. Higher-Order",
    },

    {
        q:"What is the technique called in wwhich a function calls itself repeatedly until it arrives at a result?",
        choices: ["A. Reordering", "B. Restoring", "C. Repetition", "D. Recursion"],
        a:"D. Recursion",
    },

    {
        q:"",
        choices: ["A. ", "B. ", "C. ", "D. "],
        a:"B. ",
    },

    {
        q:"",
        choices: ["A. ", "B. ", "C. ", "D. "],
        a:"B. ",
    },

]

function playGame () {
    quizBox.textContent = "";
    for (var i=0; i<questions.length; i++){
        var gameQuestion = questions[questionsIndex].q;
        var gameChoices = questions[questionsIndex].choices;

        quizQuestion.innerHTML = gameQuestion + "<br />";

        gameChoices.forEach(function(newChoice) {
            var listChoice = document.createElement("p");
            listChoice.textContent = newChoice;
            quizBox.appendChild(listChoice);
            var buttonA = document.createElement("button");
            buttonA.innerHTML = ":)";
            buttonA.onclick = function () {
                //COMPARE ANSWER
                console.log(":)");
            }
            document.body.appendChild(buttonA);

        });
    }  
}

function endGame () {

}