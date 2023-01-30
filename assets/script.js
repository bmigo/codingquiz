var timer = document.querySelector(".timer");
var startButton = document.querySelector(".startQuiz");
var quizBox = document.querySelector(".answers");
var quizQuestion = document.querySelector(".questions");

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
        a:"B. ",
    },
    {
        q:"HELLOOOO",
        choices: ["A. BEE", "B. ", "C. ", "D. "],
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
            listChoice.addEventListener("click", console.log("hello"));
        });





        /* choiceA + " <button type='button'>:)</button>" + "<br />" + 
        choiceB + " <button type='button'>:)</button>" + "<br />" + 
        choiceC + " <button type='button'>:)</button>" + "<br />" + 
        choiceD + " <button type='button'>:)</button>" + "<br />";



        button.addEventListener("click", console.log("click")); */

    }

    
}