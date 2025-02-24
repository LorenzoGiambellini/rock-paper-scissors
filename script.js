console.log("hello");

function getComputerChoice(choice){
    let x = Math.random()*100;
    console.log(x);
    if (x < 33) return "rock";
    else if (x > 66) return "paper";
    else return "scissors";
}
console.log(getComputerChoice());
