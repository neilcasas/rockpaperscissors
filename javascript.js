
// Play a round and compare user choice to computer choice
function playRound (playerSelection, computerSelection) {
    
    // If player and computer choice are the same, return tie
    if (playerSelection === computerSelection) {
        return 'tie!';

    // If player choice is rock and computer choice is paper
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {

            // Return 'Computer wins the round'
            return 'Computer wins the round!';
        
         // Otherwise, return 'you win the round'
        } else {
            return 'You win the round!';
        }

    // If player choice is paper and computer choice is scissors
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors') {

            // Return 'computer wins the round'
            return 'Computer wins the round';

        // Otherwise, return 'You win the round'
        } else {
            return 'You win the round!';
        }

    // If player choice is scissors and computer choice is rock
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {

            // Return 'computer wins the round'
            return 'Computer wins the round';
        
        // Otherwise, return 'You win the round'
        } else {
            return 'You win the round';
        }
    }
}


// Player choice 
const playerSelection = "rock";

// Assign computerSelection to the result of getComputerChoice()
const computerSelection = getComputerChoice();

// Play a round
console.log(playRound(playerSelection,computerSelection));