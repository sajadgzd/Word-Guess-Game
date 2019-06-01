var userInput = "";
var computerChoice = "";
var lettersInComputerChoice = [];
var numBlanks = 0;
var BlankSuccess = [];
var alreadyGuessed = [];

var wins = 0;
var losses = 0;
var remainingGuess = 0;

var winsText = document.getElementById("wins");
var currentWordText = document.getElementById("currentWord");
var remainingGuessText = document.getElementById("remainingGuess");
var alreadyGuessedText = document.getElementById("alreadyGuessed");

var choices = ["IRAN", "USA", "BRAZIL", "TURKEY", "TAIWAN", "BURKINA FASO", "SWITZERLAND", "ROMANIA", "SPAIN"];

function start() {
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    lettersInComputerChoice = computerChoice.split('');
    numBlanks = lettersInComputerChoice.length;
    remainingGuess = 12;
}

function checkletter(userInput) {
    var isLetterinChoice = false;
    for (let i = 0; i < numBlanks; i++) {
        if (userInput === computerChoice[i]) {
            isLetterinChoice = true;
        }
    }
    if (isLetterinChoice) {
        for (let i = 0; i < numBlanks; i++) {
            if (userInput === computerChoice[i]) {
                BlankSuccess[i] = userInput;
            }
        }
    } else {
        --remainingGuess;
    }
}

function roundFinish() {


}

start();

document.onkeyup = function() {
    userInput = String.fromCharCode(event.keyCode).toUpperCase();
    console.log(userInput);

    alreadyGuessed.push(userInput);
    alreadyGuessedText.innerHTML = alreadyGuessed;
    remainingGuessText.innerHTML = remainingGuess;


}