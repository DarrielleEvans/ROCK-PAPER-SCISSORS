//create a program that will take user input(rock, paper, or scissors) and play against the computers choice

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
let playerResult = document.getElementById('player');
let compResult = document.getElementById('comp');
let showPlayer = document.getElementById('showPlayer');
let showComp = document.getElementById('showComp');
let showMessage = document.getElementById('showMessage');
let playAgain = document.getElementById('resetButton');
let selectionDiv = document.getElementById('imageBox');

let playerTotal = 0;
let compTotal = 0;
let choice = " ";



//this function will randomly return rock, paper, or scissors
let computerSelection = function computerPlay(){
    let compChoice = ["rock", "paper","scissors"];
    let randChoice = compChoice[Math.floor(Math.random() * compChoice.length)];
    return randChoice;
  
}



rock.addEventListener('click', ()=>{
    choice = 'rock';
    game(choice);
});

paper.addEventListener('click', ()=>{
    choice = 'paper';
    game(choice);
});

scissors.addEventListener('click', ()=>{
    choice = 'scissors';
    game(choice);
});

playAgain.addEventListener('click', resetGame);


//function should take in two parameters(userinput,computerplay's return value)
//function should compare values to determine winner
function playRound(player, computer){
    let message;
    showComp.textContent = computer;
    showPlayer.textContent = player;
    console.log("player: ", player);
    console.log("computer ", computer);

    if (player === computer){
        console.log("It's a tie");
        message = "tie";

    }
    else if ((player === 'rock' && computer === 'paper') || 
        (player === 'scissors' && computer === 'rock') ||
        (player === 'paper' && computer === 'scissors')){
        console.log('You Lose!');
        message =  "loser";
        
    }
    else if ((player === 'scissors' && computer === 'paper') ||
        (player === 'paper' && computer === 'rock') || 
        (player === 'rock' && computer === 'scissors'))
        {
        console.log('You won!');
        message =  "winner";
        }
        return message;
       
        
}


//function calls the playRound function to determine winner
function game(choice){

   let roundWinner = playRound(choice, computerSelection());
   console.log("roundWinner: ", roundWinner);
    
   if(roundWinner === "winner"){
       playerTotal = playerTotal + 1;
       playerResult.innerText = "Player: " + playerTotal;
       showMessage.innerText = "YOU WIN!";
   }
   else if(roundWinner === "loser"){
       compTotal = compTotal + 1;
       compResult.innerText = "Computer: " + compTotal;
       showMessage.innerText = "YOU LOSE!";
   }
   else if (roundWinner === "tie"){
    showMessage.innerText = "TIE!";
   }
   
   //check score
   checkResults(playerTotal,compTotal);


}

//checks to see who reaches five points first
function checkResults(playerMessage, compMessage){
    let finalResult = document.getElementById('finalResult');
    if(playerMessage === 5){
        showMessage.style.display = "none";
        finalResult.classList.add('finalMessage');
        const newText = document.createElement('P');
        const newMessage = document.createTextNode("You Won the Game");
        finalResult.appendChild(newMessage);
        showResetButton();
            
    }
    else if(compMessage === 5){
        showMessage.style.display = "none";
        finalResult.classList.add('finalMessage');
        const newText = document.createElement('P');
        const newMessage = document.createTextNode("You Lost the Game");
        finalResult.appendChild(newMessage);
        showResetButton();
        
    }
}
function showResetButton(){
    playAgain.style.display = 'flex';
    selectionDiv.style.display = 'none';
   
}

function resetGame(){
    playAgain.style.display = 'none';
    selectionDiv.style.display = 'block';
    playerTotal = 0;
    compTotal = 0;
    finalResult.innerText = '';
    playerResult.innerText = "Player: " + playerTotal;
    compResult.innerText = "Computer: " + compTotal;
    showPlayer.textContent = '';
    showComp.textContent = '';
    showMessage.innerText = '';
    showMessage.style.display = 'flex';
    



}




