function getComputerChoice() {
    let x = Math.random()*100;
    if (x < 33) return "rock";
    else if (x > 66) return "paper";
    else return "scissors";
}
console.log(getComputerChoice());

function getHumanChoice() {
    let x = prompt("choose your weapon:\nR: rock\nP: paper\nS: scissors");
    if (x == "R") return "rock";
    else if (x == "P") return "paper";
    else if (x == "S") return "scissors";
}


let humanScore = 0; 
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if(humanChoice === "rock"){
        if(computerChoice === "paper") computerScore +=1;
        if(computerChoice === "scissors") humanScore +=1;
    }
    if(humanChoice === "paper"){
        if(computerChoice === "rock") humanScore +=1;
        if(computerChoice === "scissors") computerScore +=1;
    }
    if(humanChoice === "scissors"){
        if(computerChoice === "rock") computerScore +=1;
        if(computerChoice === "paper") humanScore +=1;
    }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
console.log("Human Score: " + humanScore);
console.log("Computer Score: " + computerScore);