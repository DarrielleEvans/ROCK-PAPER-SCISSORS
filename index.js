//create a program that will take user input(rock, paper, or scissors) and play against the computers choice

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
let playerResult = document.getElementById('player');
let compResult = document.getElementById('comp');
let showPlayer = document.getElementById('showPlayer');
let showComp = document.getElementById('showComp');
let playerTotal = 0;
let compTotal = 0;



//this function will randomly return rock, paper, or scissors
let computerSelection = function computerPlay(){
    choice = ["rock", "paper","scissors"];
    let randChoice = choice[Math.floor(Math.random() * choice.length)];
    //console.log("Choices: ", choice); 
    return randChoice;
}
//showComp.textContent = ("computer: ",computerSelection());


rock.addEventListener('click', ()=>{
    let choice = 'rock';
    game(choice);
});

paper.addEventListener('click', ()=>{
    let choice = 'paper';
    game(choice);
});

scissors.addEventListener('click', ()=>{
    let choice = 'scissors';
    game(choice);
});


//function should take in two parameters(userinput,computerplay's return value)
//function should compare values to determine winner
function playRound(player, computer){
    let message;

    if (player === computer){
        console.log("It's a tie");
        message = "tie";

    }
    if ((player === 'rock' && computer === 'papers') || 
        (player === 'scissors' && computer === 'rock') ||
        (player === 'paper' && computer === 'scissors')){
        console.log('You Lose!');
       // compTotal = compTotal + 1;
        //compResult.innerText = "Computer: " + compTotal;
        message =  "loser";
        
    }
    if ((player === 'scissors' && computer === 'paper') ||
        (player === 'paper' && computer === 'rock') || 
        (player === 'rock' && computer === 'scissors'))
        {
        console.log('You won!');
        message =  "winner";
        }
        return message;
        /*playerTotal = playerTotal + 1;
        console.log(playerTotal);
        
        }
        playerResult.innerText = "Player: " + playerTotal; */
        
}

//let scoreBoard1;

//function calls the playRound function to determine winner
function game(choice){
   
   let roundWinner = playRound(choice, computerSelection());
   console.log("roundWinner: ", roundWinner);

   if(roundWinner === "winner"){
       playerTotal = playerTotal + 1;
       playerResult.innerText = "Player: " + playerTotal;
   }
   else if(roundWinner === "loser"){
       compTotal = compTotal + 1;
       compResult.innerText = "Computer: " + compTotal;
   }
   showComp.textContent = computerSelection();
   showPlayer.textContent = choice;
   
}
 
 
/*console.log(scoreBoard1);

function totals(scoreBoard1){
    console.log(scoreBoard1);
 
    if (scoreBoard1 === "winner"){
        playerTotal = playerTotal + 1;
        console.log("player t", playerTotal);

    }
    if (scoreBoard1 === "loser"){
        compTotal = compTotal + 1;
        console.log("computer t:", compTotal);
        
    }
   
}*/






//game();
/*loops through program 5 times to play five rounds of the game
for (let i = 0; i < 5; i++){
game();

}*/




