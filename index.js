//create a program that will take user input(rock, paper, or scissors) and play against the computers choice

//this function will randomly return rock, paper, or scissors
function computerPlay(){
     choice = ["rock", "papers","scissors"];
    let randChoice = choice[Math.floor(Math.random() * choice.length)];
    console.log(choice);
   // console.log(randChoice);
    
    return randChoice;
}



console.log(computerPlay());

