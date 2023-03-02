let p1 = 0;
let p2 = 0;
let playerSelection;
let result;

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection, result) {
    if (playerSelection.toLowerCase() == computerSelection) {
        p1++;
        p2++;
        result = (p1 + "-" + p2 + " Tie! Both were " + computerSelection);
        console.log(result)
        return p1, p2;
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        p2++;
        result = (p1 + "-" + p2 + " You Lose! Paper beats Rock");
        console.log(result);
        return p1, p2;
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        p2++;
        result = (p1 + "-" + p2 + " You Lose! Rock beats Scissors");
        console.log(result);
        return p1, p2;
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        p2++;
        result = (p1 + "-" + p2 + " You Lose! Scissors beats Paper");
        console.log(result);
        return p1, p2;
    } else {
        p1++;
        result = (p1 + "-" + p2 + " You Win! " + playerSelection + " beats " + computerSelection);
        console.log(result);
        return p1, p2;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection, result);
    }
    console.log("Final Result: " + p1 + "-" + p2);
    p1 > p2 ? console.log("You Won the game!") : console.log("You Lost the game!");
}

game();