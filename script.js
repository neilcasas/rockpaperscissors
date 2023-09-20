// Initialize buttons
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const play = document.querySelector('.play');

// Initialize score container
const scoreContainer= document.querySelector('.score-container');

// Initialize user and computer choice display
const computerChoiceDisplay = document.querySelector('.computer-choice');
const playerChoiceDisplay = document.querySelector('.player-choice');

// Initialize userScore and computerScore
let userScore = 0;
let computerScore = 0;

// Computer randomly selects a choice
function getComputerChoice() {
    const array = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

// Play a round and compare user choice to computer choice
function playRound(playerSelection) {
    const computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        scoreContainer.textContent = `Tie! Score - ${userScore} : ${computerScore}`;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        ++userScore;
        scoreContainer.textContent = `You win the round! Score - ${userScore} : ${computerScore}`;
    } else {
        ++computerScore;
        scoreContainer.textContent = `Computer wins the round! Score - ${userScore} : ${computerScore}`;
    }

    // Display user and computer choice
    playerChoiceDisplay.textContent = `You chose ${playerSelection}`;
    computerChoiceDisplay.textContent = `Computer chose ${computerSelection}`;

    // Check and prompt winner
    if (userScore >= 5) {
        scoreContainer.textContent = 'You win the game!';
        resetGame();
    } else if (computerScore >= 5) {
        scoreContainer.textContent = 'Computer wins the game!';
        resetGame();
    }
}

// Reset the game
function resetGame() {
    userScore = 0;
    computerScore = 0;
}

// Add event listeners to the buttons
rock.addEventListener('click', () => playerSelection = 'rock');
paper.addEventListener('click', () => playerSelection = 'paper');
scissors.addEventListener('click', () => playerSelection = 'scissors');
play.addEventListener('click', () => playRound(playerSelection));

/* Features to implement
1. Images as Choices
2. Round Log
3. Score counter
4. Create a design 
*/