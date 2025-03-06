function getComputerChoice() {
    let x = Math.round(Math.random()*2);
    if (x == 0) return "rock";
    else if (x == 1) return "paper";
    else return "scissors";
    }

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

        pScore.textContent = "Human " + humanScore + " : " + computerScore + " Computer";
        pChoice.textContent = humanChoice + " VS " + computerChoice;

        if(humanScore == 5) {
            humanScore = 0;
            computerScore = 0;
            pScore.textContent = "The Winner is HUMAN!"
            pChoice.textContent = "";
        }
    
        else if(computerScore == 5) {
            humanScore = 0;
            computerScore = 0;
            pScore.textContent = "The Winner is COMPUTER!"
            pChoice.textContent = "";
        }
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

const div = document.querySelector("div");
const pScore = document.createElement("p");
const pChoice = document.createElement("p");

div.appendChild(pScore);
div.appendChild(pChoice);




playGame();