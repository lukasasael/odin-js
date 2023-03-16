let p1 = 0;
let p2 = 0;
let playerSelection;
let result;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

let resulttxt = document.querySelector("#results");
let finalresulttxt = document.querySelector("#finalresult");

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, result) {
    if (p1 === 5 || p2 === 5) {
        console.log(p1, p2);
        result = ("Final Result: " + p1 + "-" + p2);
        resulttxt.textContent = result;
        p1 > p2 ? finalresulttxt.textContent = ("You Won the game!") : (p1 == p2 ? finalresulttxt.textContent = ("Game was a tie!") : finalresulttxt.textContent = ("You Lost the game!"));
        return;
    }
    let computerSelection = getComputerChoice();
    if (playerSelection.toLowerCase() == computerSelection) {
        p1++;
        p2++;
        result = (p1 + "-" + p2 + " Tie! Both were " + computerSelection);
        //console.log(result)
        resulttxt.textContent = result;
        //return p1, p2;
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        p2++;
        result = (p1 + "-" + p2 + " You Lose! Paper beats Rock");
        //console.log(result);
        resulttxt.textContent = result;
        //return p1, p2;
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        p2++;
        result = (p1 + "-" + p2 + " You Lose! Rock beats Scissors");
        //console.log(result);
        resulttxt.textContent = result;
        //return p1, p2;
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        p2++;
        result = (p1 + "-" + p2 + " You Lose! Scissors beats Paper");
        //console.log(result);
        resulttxt.textContent = result;
        //return p1, p2;
    } else {
        p1++;
        result = (p1 + "-" + p2 + " You Win! " + playerSelection + " beats " + computerSelection);
        //console.log(result);
        resulttxt.textContent = result;
        //return p1, p2;
    }
}

function game() {
    //for (let i = 0; i < 5; i++) {
    rock.addEventListener("click", () => { playRound("rock", result) });
    paper.addEventListener("click", () => playRound("paper", result));
    scissors.addEventListener("click", () => playRound("scissors", result));
    //playerSelection = prompt();
    //playRound(playerSelection, computerSelection, result);
    //}
}

game();