const choices = ["rock", "paper","scissor"];

function getComputerChoice(){
   let randomChoice = choices[Math.floor(Math.random() * choices.length)];
   return randomChoice;
}

getComputerChoice();
console.log(getComputerChoice())