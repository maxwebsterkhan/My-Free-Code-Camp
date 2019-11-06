//This function decide's on the computers choice.
function computersPlay() {
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
    }
};

let playersScore = 0;
let computersScore = 0;
let draw = 0;
let round = 0;

//Best out of 5.
while ((playersScore < 3) && (computersScore < 3)) {
    playRound();
    console.log(playerScore, computerScore, draw);
}
// Round 1.
function playRound() {
    let computerSelection = computersPlay();
    let playerSelection = prompt("Rock, paper or scissors?").toLowerCase()
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerScore++;
            console.log("You've lost this round!");
            return ("You've lost this round!");
        }
        else if (computerSelection === "scissors") {
            playerScore++;
            console.log("You've won this round!");
            return ("You've won this round!");
        }
        else (draw++);
        console.log("It's a tie, please try again.");
        return ("It's a tie!");
    }
    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            computerScore++;
            console.log("You've lost this round!");
            return ("You've lost this round!");
        }
        else if (computerSelection === "rock") {
            playerScore++
            console.log("You've won this round!");
            return ("You've won this round!");
        }
        else (draw++);
        console.log("It's a tie, please try again.");
        return ("It's a tie!");
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerScore++;
            console.log("You've lost this round!");
            return ("You've lost this round!");
        }
        else if (computerSelection === "paper") {
            playerScore++;
            console.log("You've lost this round!");
            return ("You've lost this round!");
        }
        else (draw++);
        console.log("It's a tie, please try again.");
        return ("It's a tie!");
    }
}
//function to declane winner
function gameWin() {
    if (playerScore < computerScore) {
        console.log("You've lost the game");
        return ("You've lost the game")
    }
    else {
        console.log("You win the game!");
        return ("You win the game!")
    }
}
gameWin()

