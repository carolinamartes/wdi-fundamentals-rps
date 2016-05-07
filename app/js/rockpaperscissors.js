////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
  if (move==null){
    getInput()
  }
  else {
     return move
  }
}

function getComputerMove(move) {
  if (move==null){
    getInput()
  }
  else {
     move=randomPlay()
  }
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove==computerMove)
    {winner= "tie"
    }
    else if (computerMove==="rock" && playerMove==="scissors")|| (computerMove==="scissors" && playerMove==="paper") || (computerMove==="paper" && playerMove==="rock") {
       winner= "computer"
    }
    else if (computerMove "rock" && playerMove==="paper") || (computerMove "scissors" && playerMove==="rock") || (computerMove "paper" && playerMove==="scissors") {
       winner="player"
    }
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    if (winner==="player"){
      return playerWins+=1
    }
    else if (winner==="computer") {
      return computerWins+=1
    }
    }
    while (playerWins <5) || (computerWins<5){
      playToFive()
    }
    return [playerWins, computerWins];
