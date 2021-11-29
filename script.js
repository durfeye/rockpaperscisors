let actualPlayerScore = document.querySelector('.actualPlayersScore');
let actualComputerScore = document.querySelector('.actualComputersScore');
let weaponRock = document.querySelector('.rock');
let weaponPaper = document.querySelector('.paper');
let weaponScissors = document.querySelector('.scissors');
let whoWon = document.querySelector('#whoWon');
let restartButton = document.querySelector('.restartButton');

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

function startGame(playerChoice) {

    playerSelection = playerChoice;
    computerSelection = computerPlay();

    game(playerSelection, computerSelection);

    actualPlayerScore.textContent = playerScore;
    actualComputerScore.textContent = computerScore;

}

function game() {

    if (playerSelection === computerSelection) {
        playerScore++;
        computerScore++;
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

    if (playerScore == 5) {
        whoWon.textContent = "YOU WON THE WHOLE GAME!";
        restartButton.setAttribute('style', 'display: block');
        return;
    }
    else if (computerScore == 5) {
        whoWon.textContent = "COMPUTER WON!";
        restartButton.setAttribute('style', 'display: block');
        return;
    }
}

function gameOver() {
    
}