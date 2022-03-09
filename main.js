

let playerWin = 0;
let computerWin = 0;



const words = ["rock", "paper", "scissors"]; 
function computerPlay() {
    return words[Math.floor(Math.random() * words.length)]; /* 1. words is an array so [] go
   after words. 2.Math.random = random number between 0 and 1, Math.floor rounds down to whole
   number to create a whole integer. 3.Math.random() * words.length goes first THEN rounds down 
   to a whole integer! */
}

let computerSelection = computerPlay(); // <------computerSelection keeps listing as 'undefinded'....wtf...

function playRound(playerSelection, computerSelection) {
    let input = prompt ("Type Rock, Paper or Scissors");
    playerSelection = input.toLowerCase(); // Makes any typed selection non-case sensitive
    
    if(playerSelection === computerSelection) {
        console.log("Tie!");
    } else if((playerSelection === "rock" && computerSelection === "scissors") || 
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")) {
        playerWin++;
       console.log(`${playerSelection} beats ${computerSelection}, you win!`);
    } else {
        computerWin++;
        console.log(`${computerSelection} beats ${playerSelection}, you lose!`);   
    }
}


function game() { 
    for (let i = 0; i < 5; i++) {
    playRound();
    if(playerWin === 5) {
        console.log(`You won the game with ${playerWin} points!`);
    } else if(computerWin === 5) {
        console.log(`You lost the game! Computer: ${computerWin} points, beats your ${playerWin} points!`);
    }
}
}


console.log(game());