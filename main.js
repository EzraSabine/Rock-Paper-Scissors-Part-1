
const words = ["rock", "paper", "scissors"]; // <----This function works ****

function computerPlay() {
   return words[Math.floor(Math.random() * words.length)]; /* 1. words is an array so [] go
   after words. 2.Math.random = random number between 0 and 1, Math.floor rounds down to whole
   number to create a whole integer. 3.Math.random() * words.length goes first THEN rounds down 
   to a whole integer! */
}


function playRound(playerSelection, computerSelection) {
    let input = prompt ("Type Rock, Paper or Scissors");
    playerSelection = input.toLowerCase(); // Makes any typed selection non-case sensitive

    if(playerSelection === computerSelection) {
        return "Tie!";
    } else if((playerSelection === "rock" && computerSelection === "scissors") || 
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")) {
       return `${playerSelection} beats ${computerSelection}, you win!`;
    } else {
        return `${computerSelection} beats ${playerSelection}, you lose!`;
    }
}

const playerSelection = "rock";           // <-----Have to call this three line block to test App.
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

