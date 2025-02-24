console.log("hello");

function getComputerChoice() {
    let x = Math.random()*100;
    console.log(x);
    if (x < 33) return "rock";
    else if (x > 66) return "paper";
    else return "scissors";
}
console.log(getComputerChoice());

function getHumanChoice() {
    let x = prompt("choose your weapon");
    console.log(x);
    return x;
}
getHumanChoice();
