//create a program that will take user input(rock, paper, or scissors) and play against the computers choice

//this function will randomly return rock, paper, or scissors
let computerSelection = function computerPlay(){
    choice = ["rock", "paper","scissors"];
    let randChoice = choice[Math.floor(Math.random() * choice.length)];
    //console.log("Choices: ", choice); 
    return randChoice;
}

//console.log("computer: ",computerSelection());

//prompt user to enter choice
//let input = prompt("Enter: Rock, Paper, or Scissors");
//console.log("User: ",input);
let input;

//function should take in two parameters(userinput,computerplay's return value)
//function should compare values to determine winner
function playRound(player, computer){
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

//function calls the playRound function to determine winner
function game(){
    input = prompt("Enter: Rock, Paper, or Scissors");
   playRound(input, computerSelection());
}

//loops through program 5 times to play five rounds of the game
for (let i = 0; i < 5; i++){
game();

}




