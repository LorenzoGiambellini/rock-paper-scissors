function getComputerChoice() {
    let x = Math.round(Math.random()*2);
    if (x == 0) return "rock";
    else if (x == 1) return "paper";
    else return "scissors";
    }

function getHumanChoice() {
    let x = prompt("choose your weapon:\n- rock\n- paper\n- scissors");

    return x.toLowerCase();
}


const button = document.querySelectorAll("button");
button.forEach(button => {
    button.addEventListener("click", () => {
        let playerChoice;
    
        switch(button.id) {
            case "rock-btn":
                console.log("Player Choice: Rock");
                playerChoice = "rock";
                break;
            
            case "paper-btn":
                console.log("Player Choice: Paper");
                playerChoice = "paper";
                break;
    
            case "scissors-btn":
                console.log("Player: Choice: Scissors");
                playerChoice = "scissors";
                break;
        }
    });   
})

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
    /* for(let i = 0; i < 5; i++){
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log("Human Choice: " + humanSelection);
        console.log("Computer Choice: " + computerSelection);
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
    } */
}

playGame();