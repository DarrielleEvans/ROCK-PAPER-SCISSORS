//create a program that will take user input(rock, paper, or scissors) and play against the computers choice

//this function will randomly return rock, paper, or scissors
let computerSelection = function computerPlay(){
    choice = ["rock", "paper","scissors"];
    let randChoice = choice[Math.floor(Math.random() * choice.length)];
    console.log("Choices: ", choice); 
    return randChoice;
}

console.log("computer: ",computerSelection());

//prompt user to enter choice
let input = prompt("Enter: Rock, Paper, or Scissors");
console.log("User: ",input);

//function should take in two parameters(userinput,computerplay's return value)
//function should compare values to determine winner
function playGame(player, computer){
    console.log(player, computer);
    if (player === computer){
        console.log("It's a tie");
    }
    else if ((player === 'rock' && computer === 'papers') || 
        (player === 'scissors' && computer === 'rock') ||
        (player === 'paper' && computer === 'scissors')){
        console.log('You Lose!');
    }
    else if ((player === 'scissors' && computer === 'paper') ||
         (player === 'paper' && computer === 'rock') || 
         (player === 'rock' && computer === 'scissors'))
         {
        console.log('You won!');
         }

}
playGame(input, computerSelection());




