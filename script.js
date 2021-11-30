// declaring divs
let actualPlayerScore = document.querySelector('.actualPlayersScore');
let actualComputerScore = document.querySelector('.actualComputersScore');
let weaponRock = document.querySelector('.rock');
let weaponPaper = document.querySelector('.paper');
let weaponScissors = document.querySelector('.scissors');
let whoWon = document.querySelector('#whoWon');
let restartButton = document.querySelector('.restartButton');

//declaring start values
let playerScore = 0;
let computerScore = 0;
let playerChoice = '';

// computer randomly selects one option
function computerPlay() {
    let computerChoices = ['rock', 'paper', 'scissors'];
    let getComputerChoice = Math.floor(Math.random() * computerChoices.length)
    return computerChoices[getComputerChoice];
}

// player selects one option by clicking button
weaponRock.addEventListener('click', () => startGame('rock'));
weaponPaper.addEventListener('click', () => startGame('paper'));
weaponScissors.addEventListener('click', () => startGame('scissors'));

// restartgame function button
restartButton.addEventListener('click', () => restartGame());

// function which start game after weapon choose
function startGame(playerChoice) {

    playerSelection = playerChoice;
    computerSelection = computerPlay();

    game(playerSelection, computerSelection);

    actualPlayerScore.textContent = playerScore;
    actualComputerScore.textContent = computerScore;
}

// end game and declare winner
function gameOver() {

    weaponRock.disabled = true;
    weaponPaper.disabled = true;
    weaponScissors.disabled = true;

    if (playerScore == 5) {
        whoWon.textContent = "YOU WON THE WHOLE GAME!";
        restartButton.setAttribute('style', 'display: block');
    }
    else if (computerScore == 5) {
        whoWon.textContent = "COMPUTER WON!";
        restartButton.setAttribute('style', 'display: block');
    }
}

// whole game process
function game() {

    if (playerSelection === computerSelection) {
        whoWon.textContent = "Same symbol, round tied!";
    }
    else if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            playerScore++;
            whoWon.textContent = "Computer's choice is Scissors, Player won!";
        }
        else {
            computerScore++;
            whoWon.textContent = "Computer's choice is Paper, Computer won!";
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerScore++;
            whoWon.textContent = "Computer's choice is Rock, Player won!";
        }
        else {
            computerScore++;
            whoWon.textContent = "Computer's choice is Scissors, Computer won!";
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            playerScore++;
            whoWon.textContent = "Computer's choice is Paper, Player won!";
        }
        else {
            computerScore++;
            whoWon.textContent = "Computer's choice is Rock, Computer won!";
        }
    }
    if (playerScore == 5 || computerScore == 5) {
        gameOver(); 
    }
}

// restarting game (values etc) after restart button click
function restartGame () {

    playerScore = 0;
    computerScore = 0;
    actualPlayerScore.textContent = playerScore;
    actualComputerScore.textContent = computerScore;
    weaponRock.disabled = false;
    weaponPaper.disabled = false;
    weaponScissors.disabled = false;
    restartButton.setAttribute('style', 'display: none');
    whoWon.textContent = "";
}