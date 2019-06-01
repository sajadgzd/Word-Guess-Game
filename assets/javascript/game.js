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
var lossesText = document.getElementById("losses");
var currentWordText = document.getElementById("currentWord");
var remainingGuessText = document.getElementById("remainingGuess");
var alreadyGuessedText = document.getElementById("alreadyGuessed");

var choices = ["IRAN", "USA", "BRAZIL", "TURKEY", "TAIWAN", "BURKINAFASO", "SWITZERLAND", "ROMANIA", "SPAIN"];

function start() {
    BlankSuccess = [];
    alreadyGuessed = [];
    numBlanks = 0;


    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    lettersInComputerChoice = computerChoice.split('');
    numBlanks = lettersInComputerChoice.length;
    remainingGuess = lettersInComputerChoice.length;

    for (let i = 0; i < lettersInComputerChoice.length; i++) {
        BlankSuccess.push("_");
    }
    remainingGuessText.innerHTML = remainingGuess;
    currentWordText.innerHTML = BlankSuccess.join(" ");
    winsText.innerHTML = wins;
    lossesText.innerHTML = losses;

}

function checkletter(userInput) {
    var isLetterinAlreadyGuessed = false;
    for (let i = 0; i < alreadyGuessed.length; i++) {
        if (userInput == alreadyGuessed[i]) {
            isLetterinAlreadyGuessed = true;
        }
    }
    if (!isLetterinAlreadyGuessed) {
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
            currentWordText.innerHTML = BlankSuccess.join(" ");
        } else {
            --remainingGuess;
            alreadyGuessed.push(userInput);
            alreadyGuessedText.innerHTML = alreadyGuessed;
            remainingGuessText.innerHTML = remainingGuess;
        }
    }
}

function roundFinish() {
    if (lettersInComputerChoice.toString() === BlankSuccess.toString()) {
        ++wins;
        winsText.innerHTML = wins;
        start();
    } else if (remainingGuess === 0) {
        ++losses;
        lossesText.innerHTML = losses;
        start();
    }
}

start();

document.onkeyup = function() {

    userInput = String.fromCharCode(event.keyCode).toUpperCase();
    checkletter(userInput);

    roundFinish();

}