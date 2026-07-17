console.log("hello world")

let getComputerChoise = "" ;
getComputerChoise = Math.floor(Math.random() * 3) + 1;

if (getComputerChoise === 1) {
    getComputerChoise = "Rock";
} else if (getComputerChoise === 2) {
    getComputerChoise = "Scissors";
} else if (getComputerChoise === 3) {
    getComputerChoise = "Paper";
}

console.log(getComputerChoise);