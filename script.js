console.log("hello world")

function getComputerChoice() {
let computerChoice = Math.floor(Math.random() * 3) + 1;

if (computerChoice === 1) {
    return "Rock";
} else if (computerChoice === 2) {
    return "Scissors";
} else if (computerChoice === 3) {
    return "Paper";
}

};
getComputerChoice();
console.log(getComputerChoice());

function getHumanChoice() {
    let humanChoise = prompt("Please, choose one: Rock, Paper or Scissors");
    return humanChoise;
}
getComputerChoice();
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;