
var playerMove;
var computerMove;
////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
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



function getPlayerMove() {

 playerMove=getInput();
  if (playerMove===null){
    getInput();
  }
  else {
  console.log("Player move is " +playerMove);

}
  return playerMove;
}


function getComputerMove() {

computerMove=randomPlay();
    if (computerMove===null){
    randomPlay();
  }
  else {
     console.log("Computer move is "+ computerMove);

}
   return computerMove;
}



  var getWinner = function() {
      // This function should either give us back 'player', 'computer', or 'tie'.
      // The rules of the game are that rock beats scissors, scissors beats paper, and paper beats rock.
      // Assume that the only possible input values we can get are 'rock', 'paper', and 'scissors'.
var winner;
    if (playerMove===computerMove){
    winner= "Tie";
    }
    else if ((computerMove==="rock") && (playerMove==="scissors")){
   	winner= "Computer";
    }
    else if ((computerMove==="scissors") && (playerMove==="paper")){
   	winner= "Computer";
    }
    else if ((computerMove==="paper") && (playerMove==="rock")){
   	winner= "Computer";
    }
    else{
    winner="Player";
    }
    return winner;
  }



    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while (playerWins < 5 && computerWins < 5) {
      var playerMove = getPlayerMove();
      var computerMove = getComputerMove();
      if (getWinner() === 'Player') {
        playerWins ++;
      } else if (getWinner() === 'Computer') {
        computerWins ++;
      }
      console.log(getWinner() + " wins!")
      console.log("Computer: " +  computerWins + ", "+ "Player: " + playerWins);

    }
    return [playerWins, computerWins];
}
playToFive()
