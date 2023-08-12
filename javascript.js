// Initialize userScore and computerScore
let userScore = 0;
let computerScore = 0;

// Play until either userScore or computerScore reaches 5
do {

    // Computer randomly selects a choice
    function getComputerChoice() {
        const array = ['rock','paper','scissors'];
        const random = Math.floor(Math.random() * array.length);
        return(array[random]);
    }

    // Play a round and compare user choice to computer choice
    function playRound (playerSelection, computerSelection) {
        
        // If player and computer choice are the same, return tie
        if (playerSelection === computerSelection) {
            alert(`Tie! Score - ${userScore} : ${computerScore}`);

        // If player choice is rock and computer choice is paper
        } else if (playerSelection === 'rock') {
            if (computerSelection === 'paper') {

                // Add a point to computerScore and return 'Computer wins the round'
                ++computerScore;
                alert(`Computer wins the round! Score - ${userScore} : ${computerScore}`);

            // Otherwise, add a point to userScore and return 'You win the round'
            } else {
                ++userScore;
                alert(`You win the round! Score - ${userScore} : ${computerScore}`);
            }

        // If player choice is paper and computer choice is scissors
        } else if (playerSelection === 'paper') {
            if (computerSelection === 'scissors') {

                // Add a point to computerScore and return 'Computer wins the round'
                ++computerScore;
                alert(`Computer wins the round! Score - ${userScore} : ${computerScore}`);

            // Otherwise, add a point to userScore and return 'You win the round'
            } else {
                ++userScore;
                alert(`You win the round! Score - ${userScore} : ${computerScore}`);
            }

        // If player choice is scissors and computer choice is rock
        } else if (playerSelection === 'scissors') {
            if (computerSelection === 'rock') {

                // Add a point to computerScore and return 'Computer wins the round'
                ++computerScore;
                alert(`Computer wins the round! Score - ${userScore} : ${computerScore}`);
            
            // Otherwise, add a point to userScore and return 'You win the round'
            } else {
                ++userScore;
                alert(`You win the round! Score - ${userScore} : ${computerScore}`);
            }
        }
    }

    // Player choice 
    const playerSelection = prompt('rock, paper or scissors?');

    // Assign computerSelection to the result of getComputerChoice()
    const computerSelection = getComputerChoice();

    // Play a round
    playRound(playerSelection.toLowerCase(),computerSelection);

} while (userScore < 5 && computerScore < 5);

// Check and prompt winner
if (userScore > computerScore) {
     alert('You win the game!');
} else if (userScore < computerScore) {
    alert('Computer wins the game!');
} else {
    alert('Its a tie!');
}