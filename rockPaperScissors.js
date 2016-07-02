var playerMove;
var computerMove;
var playerWins=0;
var computerWins=0;
var tieWins=0;
var gamesPlayed=0;

function rockClicked(){
playerMove="rock";

document.getElementById('playerMove').innerHTML = "You chose " + playerMove;
play();
return playerMove;

}

function paperClicked(){
 playerMove="paper";
   document.getElementById('playerMove').innerHTML = "You chose " + playerMove;
play();
return playerMove;
}

function scissorsClicked(){
playerMove="scissors";
   document.getElementById('playerMove').innerHTML = "You chose " + playerMove;
    play();
return playerMove;
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

function getComputerMove() {
  computerMove = randomPlay();
  document.getElementById('computerMove').innerHTML = "Computer chose " + computerMove ;
  return computerMove;
}

function getWinner () {
  var winner;
  if (playerMove === computerMove) {
    winner = "Tie";
    tieWins++;
  } else if ((computerMove === "rock") && (playerMove === "scissors")) {
    winner = "Computer";
    computerWins++;
  } else if ((computerMove === "scissors") && (playerMove === "paper")) {
    winner = "Computer";
    computerWins++;
  } else if ((computerMove === "paper") && (playerMove === "rock")) {
    winner = "Computer";
    computerWins++;
  } else {
    winner = "Player";
    playerWins++;
  }
  if ((winner=="Computer")||(winner=="Player")){
  document.getElementById('winner').innerHTML = winner + " wins!"
}
  else{
  document.getElementById('winner').innerHTML = "It's a tie!"
}
  return [playerWins, computerWins, winner];
}

function play(){
  playerMove;
  getComputerMove();
  getWinner();
  gamesPlayed++;
  highlight();
  document.getElementById('score').innerHTML = "Games played: " + gamesPlayed;
  return gamesPlayed;
}
function highlight(){
if ((computerWins>playerWins) && (computerWins>tieWins)){
    document.getElementById('games').innerHTML= "<span style='font-weight:700'> Computer </span>" + ": " + computerWins + ", "+ "Player: " + playerWins + ", "+ "Tie: " + tieWins;
}
else if ((playerWins>computerWins) && (playerWins>tieWins)) {
    document.getElementById('games').innerHTML="Computer: " + computerWins + ", "+ "<span style='font-weight:700'> Player </span>" + ": "+ playerWins + ", "+ "Tie: " + tieWins;
}
else {
  document.getElementById('games').innerHTML="Computer: " + computerWins + ", "+ "Player: " + playerWins + ", "+ "<span style='font-weight:700'> Tie </span>"+ ": " + tieWins;
}
}

function resetScore(){

rockClicked=false;
paperClicked=false;
scissorsClicked=false;
  document.getElementById('games').innerHTML="";
  document.getElementById('score').innerHTML="";
  document.getElementById('winner').innerHTML="";
  document.getElementById('computerMove').innerHTML="";
  document.getElementById('playerMove').innerHTML="";
   return [computerWins,tieWins, playerWins, gamesPlayed]
 }
