let playerScore = 0;
let computerScore = 0;

// computer randomly selects one option
function computerPlay() {
    let computerChoices = ['rock', 'paper', 'scissors'];
    let getComputerChoice = Math.floor(Math.random() * computerChoices.length)
    return computerChoices[getComputerChoice];
}

// one round play


function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Enter your choice", "");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay();

    console.log(`Player selected "${playerSelection}"`);
    console.log(`Computer selected "${computerSelection}"`);

    if (playerSelection === computerSelection) {
        console.log("Same symbol, game tied!");
        playerScore++;
        computerScore++;
        console.log(`Player: ${playerScore}, Computer: ${computerScore}`);
    }
    else if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            console.log("Computer's choice is Scissors, Player won!");
            playerScore++;
            console.log(`Player: ${playerScore}, Computer: ${computerScore}`);
        }
        else {
            console.log("Computer's choice is Paper, Computer won!");
            computerScore++;
            console.log(`Player: ${playerScore}, Computer: ${computerScore}`);
        }
    }
    else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            console.log("Computer's choice is Rock, Player won!");
            playerScore++;
            console.log(`Player: ${playerScore}, Computer: ${computerScore}`);
        }
        else {
            console.log("Computer's choice is Scissors, Computer won!");
            computerScore++;
            console.log(`Player: ${playerScore}, Computer: ${computerScore}`);
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            console.log("Computer's choice is Paper, Player won!");
            playerScore++;
            console.log(`Player: ${playerScore}, Computer: ${computerScore}`);
        }
        else {
            console.log("Computer's choice is Rock, Computer won!");
            computerScore++;
            console.log(`Player: ${playerScore}, Computer: ${computerScore}`);
        }
    }
}

function game() {

    playRound();

    if (playerScore == 5) {
        console.log("YOU WON!");
    }
    else if (computerScore == 5) {
        console.log("COMPUTER WON!");
    }
}
