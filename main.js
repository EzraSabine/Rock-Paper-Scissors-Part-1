
const words = ["rock", "paper", "scissors"]; 

function computerPlay() {
   return words[Math.floor(Math.random() * words.length)]; /* 1. words is an array so [] go
   after words. 2.Math.random = random number between 0 and 1, Math.floor rounds down to whole
   number to create a whole integer. 3.Math.random() * words.length goes first THEN rounds down 
   to a whole integer! */
}

const computerSelection = computerPlay(); 

function game() { 
    let input = prompt ("Type Rock, Paper or Scissors");
            playerSelection = input.toLowerCase(); // Makes any typed selection non-case sensitive
    for (let i = 0; i < 5; i++) {
    let gameRounds = i;
    let playerWin = 0;
    let computerWin = 0;
    
        function playRound(playerSelection, computerSelection) {
        
            if(playerSelection === computerSelection) {
                return "Tie!";
            } else if((playerSelection === "rock" && computerSelection === "scissors") || 
            (playerSelection === "scissors" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "rock")) {
               return `${playerSelection} beats ${computerSelection}, you win!`;
               playerWin++;
            } else {
                return `${computerSelection} beats ${playerSelection}, you lose!`;
                computerWin++;
            }
        }

    }
    
    if(playerWin === 5) {
        console.log(`You won the game with ${playerWin} points!`)
    } else if(computerWin === 5) {
        console.log(`You lost the game! Computer ${computerWin} points, beats your ${playerWin} points!`)
    }
}
