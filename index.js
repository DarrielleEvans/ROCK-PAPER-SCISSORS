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
console.log(input);

//function should take in two parameters(userinput,computerplay's return value)
//function should compare values to determine winner
function playGame(player, computer){
    console.log(player, computer);
    if (player === computer){
        console.log("It's a tie");
    }
    else if (player === 'rock' && computer === 'papers'){
        console.log('You Lose! Paper beats rock.');
    }
    else if (player === 'scissors' && computer === 'paper'){
        console.log('You won! Scissors beats paper');
    }
    else if (player === 'paper' && computer === 'rock'){
        console.log("You won! Paper beats rock");
    }

}
playGame(input, computerSelection() );




