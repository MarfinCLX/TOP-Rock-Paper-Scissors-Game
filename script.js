console.log("hello world")

function getComputerChoice() {
let choice = Math.floor(Math.random() * 3) + 1;

if (choice === 1) {
    return "Rock";
} else if (choice === 2) {
    return "Scissors";
} else if (choice === 3) {
    return "Paper";
}

};

function getHumanChoice() {
    let choice = prompt("Please, choose one: Rock, Paper or Scissors");
    return choice; 
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice =  humanChoice.toLowerCase();

    if ((humanChoice === "rock" && computerChoice === "Scissors") || (humanChoice === "paper" && computerChoice === "Rock") ||
     (humanChoice === "scissors" && computerChoice === "Paper")) {
        humanScore++;
        console.log(`
            You win!
            Your choice '${humanChoice}'.
            Computer choice '${computerChoice}'
            Human Score: '${humanScore}'
            Computer Score: '${computerScore}'
            `)
     } else if ((humanChoice === "scissors" && computerChoice === "Rock") || (humanChoice === "rock" & computerChoice === "Paper") ||
     (humanChoice === "paper" && computerChoice === "Scissors")) {
        computerScore++;
        console.log(`
            You lost!
            Your choice '${humanChoice}'.
            Computer choice '${computerChoice}'
            Human Score: '${humanScore}'
            Computer Score: '${computerScore}'
            `)
     } else if ((humanChoice === "scissors" && computerChoice === "Scissors") || (humanChoice === "rock" && computerChoice === "Rock") || 
     (humanChoice === "paper" && computerChoice === "Paper")) {
        console.log(`
            It's a draw!
            Your choice '${humanChoice}'.
            Computer choice '${computerChoice}'
            Human Score: '${humanScore}'
            Computer Score: '${computerScore}'
            `)
     };
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);