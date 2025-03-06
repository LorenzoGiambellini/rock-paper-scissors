function getComputerChoice() {
    let x = Math.round(Math.random()*2);
    if (x == 0) return "rock";
    else if (x == 1) return "paper";
    else return "scissors";
    }

/* function getHumanChoice() {
    let x = prompt("choose your weapon:\n- rock\n- paper\n- scissors");

    return x.toLowerCase();
} */


function playGame(){
    let humanScore = 0; 
    let computerScore = 0;
    let humanSelection;

    
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
        console.log("Human Choice: " + humanChoice);
        console.log("Computer Choice: " + computerChoice);
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
    }
    
    const button = document.querySelectorAll("button");
    button.forEach(button => {
        button.addEventListener("click", () => {
        
            switch(button.id) {
                case "rock-btn":
                    humanSelection = "rock";
                    playRound(humanSelection, getComputerChoice());
                    break;
                
                case "paper-btn":
                    humanSelection = "paper";
                    playRound(humanSelection, getComputerChoice());
                    break;
        
                case "scissors-btn":
                    humanSelection = "scissors";
                    playRound(humanSelection, getComputerChoice());
                    break;
            }
        });   
    })


}

playGame();