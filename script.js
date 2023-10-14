// Initialize choices, play button, and reset container
const rock = document.querySelector('.choice-rock');
const paper = document.querySelector('.choice-paper');
const scissors = document.querySelector('.choice-scissors');
const play = document.querySelector('#play-button');
const resetContainer = document.querySelector('.reset-container');

// Initialize player and computer choice container
const resultContainer= document.querySelector('.result-display');

// Initialize user and computer choice display
const computerChoiceDisplay = document.querySelector('.computer-choice-display');
const playerChoiceDisplay = document.querySelector('.player-choice-display');

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
        resultContainer.textContent = `Tie! Score - ${userScore} : ${computerScore}`;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        ++userScore;
        resultContainer.textContent = `You win the round! Score - ${userScore} : ${computerScore}`;
    } else {
        ++computerScore;
        resultContainer.textContent = `Computer wins the round! Score - ${userScore} : ${computerScore}`;
    }

    // Display user and computer choice
    playerChoiceDisplay.textContent = `You chose ${playerSelection}`;
    computerChoiceDisplay.textContent = `Computer chose ${computerSelection}`;

    // Check and prompt winner
    if (userScore >= 5) {
        resultContainer.textContent = 'You win the game!';
        play.remove();
        resetContainer.appendChild(resetButton);
    } else if (computerScore >= 5) {
        resultContainer.textContent = 'Computer wins the game!';
        play.remove();
        resetContainer.appendChild(resetButton);
    }
}

// Reset the game
function resetGame() {
    userScore = 0;
    computerScore = 0;
}

// Initialize resetButton 
const resetButton = document.createElement('button');
resetButton.textContent = 'Reset Game';
resetButton.id = 'reset-button';
resetButton.addEventListener('click', () => {
    resetGame();
    location.reload();
});


// Add event listeners to the buttons
rock.addEventListener('click', () => {
    playerSelection = 'rock';
    highlightChoice(rock);
});

paper.addEventListener('click', () => {
    playerSelection = 'paper';
    highlightChoice(paper);
});

scissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    highlightChoice(scissors);
});

// Highlight the clicked choice and remove highlighting from others
function highlightChoice(choiceElement) {

    // Remove .choice-clicked class from all choices
    rock.classList.remove('choice-clicked');
    paper.classList.remove('choice-clicked');
    scissors.classList.remove('choice-clicked');

    // Add .choice-clicked class to the clicked choice
    choiceElement.classList.add('choice-clicked');
}

play.addEventListener('click', () => playRound(playerSelection));
