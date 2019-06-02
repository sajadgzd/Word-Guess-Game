var userInput = "";
var computerChoice = "";
var lettersInComputerChoice = [];
var numBlanks = 0;
var BlankSuccess = [];
var alreadyGuessed = [];
var audioElement = document.createElement("AUDIO");
audioElement.setAttribute("controls", "controls");
audioElement.setAttribute("class", "audio");


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

// correctAnswerText.appendChild(audioElement);

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
            audioElement.setAttribute("src", "../Word-Guess-Game/assets/audio/Iran.mp3");
            correctAnswerText.appendChild(audioElement);
        }
        if (computerChoice.toString() === "USA") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg")
                // audio = new Audio('../Word-Guess-Game/assets/audio/U.S.A.mp3');
                // audio.play();
            audioElement.setAttribute("src", "../Word-Guess-Game/assets/audio/U.S.A.mp3");
            correctAnswerText.appendChild(audioElement);

        }
        if (computerChoice.toString() === "BRAZIL") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg")
            audioElement.setAttribute("src", "../Word-Guess-Game/assets/audio/Brazil.mp3");
            correctAnswerText.appendChild(audioElement);
        }
        if (computerChoice.toString() === "TURKEY") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg")
            audioElement.setAttribute("src", "../Word-Guess-Game/assets/audio/turkey.wav");
            correctAnswerText.appendChild(audioElement);
        }
        if (computerChoice.toString() === "TAIWAN") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/7/72/Flag_of_the_Republic_of_China.svg")
            audioElement.setAttribute("src", "../Word-Guess-Game/assets/audio/Taiwan.mp3");
            correctAnswerText.appendChild(audioElement);
        }
        if (computerChoice.toString() === "BURKINAFASO") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Burkina_Faso.svg")
            audioElement.setAttribute("src", "../Word-Guess-Game/assets/audio/BurkinaFaso.mp3");
            correctAnswerText.appendChild(audioElement);
        }
        if (computerChoice.toString() === "SWITZERLAND") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg")
            audioElement.setAttribute("src", "../Word-Guess-Game/assets/audio/Switzerland.mp3");
            correctAnswerText.appendChild(audioElement);
        }
        if (computerChoice.toString() === "ROMANIA") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg")
            audioElement.setAttribute("src", "../Word-Guess-Game/assets/audio/Romania.mp3");
            correctAnswerText.appendChild(audioElement);
        }
        if (computerChoice.toString() === "SPAIN") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg")
            audioElement.setAttribute("src", "../Word-Guess-Game/assets/audio/Spain.mp3");
            correctAnswerText.appendChild(audioElement);
        }
        if (computerChoice.toString() === "INDONESIA") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg")
            audioElement.setAttribute("src", "../Word-Guess-Game/assets/audio/Indonesia.mp3");
            correctAnswerText.appendChild(audioElement);
        }
        if (computerChoice.toString() === "JAPAN") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg")
            audioElement.setAttribute("src", "../Word-Guess-Game/assets/audio/Japan.mp3");
            correctAnswerText.appendChild(audioElement);
        }
        if (computerChoice.toString() === "KENYA") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg")
            audioElement.setAttribute("src", "../Word-Guess-Game/assets/audio/Kenya.mp3");
            correctAnswerText.appendChild(audioElement);
        }
        if (computerChoice.toString() === "GREECE") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg")
            audioElement.setAttribute("src", "../Word-Guess-Game/assets/audio/Greece.mp3");
            correctAnswerText.appendChild(audioElement);
        }
        if (computerChoice.toString() === "TUNISIA") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg")
            audioElement.setAttribute("src", "../Word-Guess-Game/assets/audio/Tunisia.mp3");
            correctAnswerText.appendChild(audioElement);
        }
        if (computerChoice.toString() === "MONGOLIA") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Mongolia.svg")
            audioElement.setAttribute("src", "../Word-Guess-Game/assets/audio/Mongolia.mp3");
            correctAnswerText.appendChild(audioElement);
        }
        if (computerChoice.toString() === "SENEGAL") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg")
            audioElement.setAttribute("src", "../Word-Guess-Game/assets/audio/Senegal.mp3");
            correctAnswerText.appendChild(audioElement);
        }
        if (computerChoice.toString() === "FINLAND") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg")
            audioElement.setAttribute("src", "../Word-Guess-Game/assets/audio/Finland.mp3");
            correctAnswerText.appendChild(audioElement);
        }

        start();

    } else if (remainingGuess === 0) {
        ++losses;
        lossesText.innerHTML = losses;
        correctAnswerText.innerHTML = computerChoice.toString();
        if (computerChoice.toString() === "IRAN") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran.svg")
            audioElement.setAttribute("src", "../Word-Guess-Game/assets/audio/Iran.mp3");
            correctAnswerText.appendChild(audioElement);
        }

        if (computerChoice.toString() === "USA") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg")
            audioElement.setAttribute("src", "../Word-Guess-Game/assets/audio/U.S.A.mp3");
            correctAnswerText.appendChild(audioElement);
        }
        if (computerChoice.toString() === "BRAZIL") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg")
            audioElement.setAttribute("src", "../Word-Guess-Game/assets/audio/Brazil.mp3");
            correctAnswerText.appendChild(audioElement);
        }
        if (computerChoice.toString() === "TURKEY") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg")
            audioElement.setAttribute("src", "../Word-Guess-Game/assets/audio/turkey.wav");
            correctAnswerText.appendChild(audioElement);
        }
        if (computerChoice.toString() === "TAIWAN") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/7/72/Flag_of_the_Republic_of_China.svg")
            audioElement.setAttribute("src", "../Word-Guess-Game/assets/audio/Taiwan.mp3");
            correctAnswerText.appendChild(audioElement);
        }
        if (computerChoice.toString() === "BURKINAFASO") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Burkina_Faso.svg")
            audioElement.setAttribute("src", "../Word-Guess-Game/assets/audio/BurkinaFaso.mp3");
            correctAnswerText.appendChild(audioElement);
        }
        if (computerChoice.toString() === "SWITZERLAND") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg")
            audioElement.setAttribute("src", "../Word-Guess-Game/assets/audio/Switzerland.mp3");
            correctAnswerText.appendChild(audioElement);
        }
        if (computerChoice.toString() === "ROMANIA") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg")
            audioElement.setAttribute("src", "../Word-Guess-Game/assets/audio/Romania.mp3");
            correctAnswerText.appendChild(audioElement);
        }
        if (computerChoice.toString() === "SPAIN") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg")
            audioElement.setAttribute("src", "../Word-Guess-Game/assets/audio/Spain.mp3");
            correctAnswerText.appendChild(audioElement);
        }
        if (computerChoice.toString() === "INDONESIA") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg")
            audioElement.setAttribute("src", "../Word-Guess-Game/assets/audio/Indonesia.mp3");
            correctAnswerText.appendChild(audioElement);
        }
        if (computerChoice.toString() === "JAPAN") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg")
            audioElement.setAttribute("src", "../Word-Guess-Game/assets/audio/Japan.mp3");
            correctAnswerText.appendChild(audioElement);
        }
        if (computerChoice.toString() === "KENYA") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg")
            audioElement.setAttribute("src", "../Word-Guess-Game/assets/audio/Kenya.mp3");
            correctAnswerText.appendChild(audioElement);
        }
        if (computerChoice.toString() === "GREECE") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg")
            audioElement.setAttribute("src", "../Word-Guess-Game/assets/audio/Greece.mp3");
            correctAnswerText.appendChild(audioElement);
        }
        if (computerChoice.toString() === "TUNISIA") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg")
            audioElement.setAttribute("src", "../Word-Guess-Game/assets/audio/Tunisia.mp3");
            correctAnswerText.appendChild(audioElement);
        }
        if (computerChoice.toString() === "MONGOLIA") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Mongolia.svg")
            audioElement.setAttribute("src", "../Word-Guess-Game/assets/audio/Mongolia.mp3");
            correctAnswerText.appendChild(audioElement);
        }
        if (computerChoice.toString() === "SENEGAL") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg")
            audioElement.setAttribute("src", "../Word-Guess-Game/assets/audio/Senegal.mp3");
            correctAnswerText.appendChild(audioElement);
        }
        if (computerChoice.toString() === "FINLAND") {
            countryImage.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg")
            audioElement.setAttribute("src", "../Word-Guess-Game/assets/audio/Finland.mp3");
            correctAnswerText.appendChild(audioElement);
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