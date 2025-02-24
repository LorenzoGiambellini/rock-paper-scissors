function getComputerChoice() {
    let x = Math.random()*100;
    if (x < 33) return "rock";
    else if (x > 66) return "paper";
    else return "scissors";
    }

function getHumanChoice() {
    let x = prompt("choose your weapon:\n- rock\n- paper\n- scissors");

    return x.toLowerCase();
}




function playGame(){
    let humanScore = 0; 
    let computerScore = 0;
    let humanSelection;
    let computerSelection;
    console.log(computerSelection);
    
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
    for(let i = 0; i < 5; i++){
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log("Human Choice: " + humanSelection);
        console.log("Computer Choice: " + computerSelection);
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
    }
}

playGame();