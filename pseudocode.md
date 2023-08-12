# Rock, Paper, Scissors Game

1. Initialize userScore and computerScore to 0

2. While userScore < 5 and computerScore < 5:
   1. Prompt user for choice (rock, paper, or scissors)
   2. Generate a random computer choice (rock, paper, or scissors)
   
   3. Compare user choice with computer choice:
      - If they are the same, print 'Tie!'
      - Else if user choice is 'rock':
        - If computer choice is 'paper', add a point to computerScore and print 'Computer wins the round!'
        - Else add a point to userScore and print 'You win the round!'
      - Else if user choice is 'paper':
        - If computer choice is 'scissors', add a point to computerScore and print 'Computer wins the round!'
        - Else add a point to userScore and print 'You win the round!'
      - Else (user choice is 'scissors'):
        - If computer choice is 'rock', add a point to computerScore and print 'Computer wins the round!'
        - Else add a point to userScore and print 'You win the round!'
        
   4. Print current scores (userScore and computerScore)

3. Compare final scores:
   - If userScore is 5, print 'You win the game!'
   - Else if computerScore is 5, print 'Computer wins the game!'