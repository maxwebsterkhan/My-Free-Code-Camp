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
//Tally of points scored.
let playersScore = 0;
let computersScore = 0;
let draw = 0;
let round = 0;
//Best out of 5.
while ((playersScore < 3) && (computersScore < 3)) {
    playRound();
    console.log(playersScore, computersScore, draw);
}
// First round played.
function playRound() {
    let computerSelection = computersPlay();
    let playerSelection = prompt("Rock, paper or scissors?").toLowerCase()
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computersScore++;
            console.log("You've lost this round!");
            return ("You've lost this round!");
        }
        else if (computerSelection === "scissors") {
            playersScore++;
            console.log("You've won this round!");
            return ("You've won this round!");
        }
        else (draw++);
        console.log("It's a tie, please try again.");
        return ("It's a tie!");
    }
    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            computersScore++;
            console.log("You've lost this round!");
            return ("You've lost this round!");
        }
        else if (computerSelection === "rock") {
            playersScore++
            console.log("You've won this round!");
            return ("You've won this round!");
        }
        else (draw++);
        console.log("It's a tie, please try again.");
        return ("It's a tie!");
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computersScore++;
            console.log("You've lost this round!");
            return ("You've lost this round!");
        }
        else if (computerSelection === "paper") {
            playersScore++;
            console.log("You've lost this round!");
            return ("You've lost this round!");
        }
        else (draw++);
        console.log("It's a tie, please try again.");
        return ("It's a tie!");
    }
}
//function to declare winner
function gameWin() {
    if (playersScore < computersScore) {
        console.log("You've lost the game");
        return ("You've lost the game")
    }
    else {
        console.log("You win the game!");
        return ("You win the game!")
    }
}
gameWin()

