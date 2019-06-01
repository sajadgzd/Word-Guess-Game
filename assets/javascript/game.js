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
var correctAnswerText = document.getElementById("answer");
var countryImage = document.getElementById("country");

var choices = ["IRAN", "USA", "BRAZIL", "TURKEY", "TAIWAN", "BURKINAFASO", "SWITZERLAND", "ROMANIA", "SPAIN", "INDONESIA", "JAPAN", "KENYA", "GREECE", "TUNISIA", "MONGOLIA", "SENEGAL", "FINLAND"];

function start() {
    BlankSuccess = [];
    alreadyGuessed = [];
    numBlanks = 0;

    alreadyGuessedText.innerHTML = alreadyGuessed;
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    lettersInComputerChoice = computerChoice.split('');
    numBlanks = lettersInComputerChoice.length;
    remainingGuess = lettersInComputerChoice.length + 3;

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
        correctAnswerText.innerHTML = computerChoice.toString();
        if (computerChoice.toString() === "IRAN") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran.svg")
        }
        if (computerChoice.toString() === "USA") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg")
        }
        if (computerChoice.toString() === "BRAZIL") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg")
        }
        if (computerChoice.toString() === "TURKEY") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg")
        }
        if (computerChoice.toString() === "TAIWAN") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/7/72/Flag_of_the_Republic_of_China.svg")
        }
        if (computerChoice.toString() === "BURKINAFASO") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Burkina_Faso.svg")
        }
        if (computerChoice.toString() === "SWITZERLAND") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg")
        }
        if (computerChoice.toString() === "ROMANIA") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg")
        }
        if (computerChoice.toString() === "SPAIN") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg")
        }
        if (computerChoice.toString() === "INDONESIA") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg")
        }
        if (computerChoice.toString() === "JAPAN") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg")
        }
        if (computerChoice.toString() === "KENYA") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg")
        }
        if (computerChoice.toString() === "GREECE") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg")
        }
        if (computerChoice.toString() === "TUNISIA") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg")
        }
        if (computerChoice.toString() === "MONGOLIA") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Mongolia.svg")
        }
        if (computerChoice.toString() === "SENEGAL") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg")
        }
        if (computerChoice.toString() === "FINLAND") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg")
        }

        start();

    } else if (remainingGuess === 0) {
        ++losses;
        lossesText.innerHTML = losses;
        correctAnswerText.innerHTML = computerChoice.toString();
        if (computerChoice.toString() === "IRAN") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran.svg")
        }

        if (computerChoice.toString() === "USA") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg")
        }
        if (computerChoice.toString() === "BRAZIL") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg")
        }
        if (computerChoice.toString() === "TURKEY") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg")
        }
        if (computerChoice.toString() === "TAIWAN") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/7/72/Flag_of_the_Republic_of_China.svg")
        }
        if (computerChoice.toString() === "BURKINAFASO") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Burkina_Faso.svg")
        }
        if (computerChoice.toString() === "SWITZERLAND") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg")
        }
        if (computerChoice.toString() === "ROMANIA") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg")
        }
        if (computerChoice.toString() === "SPAIN") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg")
        }
        if (computerChoice.toString() === "INDONESIA") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg")
        }
        if (computerChoice.toString() === "JAPAN") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg")
        }
        if (computerChoice.toString() === "KENYA") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg")
        }
        if (computerChoice.toString() === "GREECE") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg")
        }
        if (computerChoice.toString() === "TUNISIA") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg")
        }
        if (computerChoice.toString() === "MONGOLIA") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Mongolia.svg")
        }
        if (computerChoice.toString() === "SENEGAL") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg")
        }
        if (computerChoice.toString() === "FINLAND") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg")
        }




        start();

    }
}

start();

document.onkeyup = function() {

    userInput = String.fromCharCode(event.keyCode).toUpperCase();

    checkletter(userInput);

    roundFinish();
}