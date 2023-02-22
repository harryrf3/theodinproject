// required for user input in console
const prompt = require('prompt-sync')();

const pScore = document.querySelector('.playerScore');
const cScore = document.querySelector('.computerScore');
const rMessage = document.querySelector('.roundMessage');
const buttons = document.querySelector('.buttons');



let playerScore = 0;
let computerScore = 0;

pScore.innerText = `${playerScore}`;
pScore.style.color = 'red';
cScore.innerText = 'hello world';
cScore.style.color = 'red';
rMessage.innerText = 'Hello world';

// round conditionals
const playRound = (playerSelection, computerSelection) => {
  if (computerSelection === playerSelection) {
    playerScore++;
    computerScore++;
    return 'Draw!';
  }
  else if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerScore++;
    return 'Paper beats rock. You Lose!';
  }
  else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerScore++;
    return 'Scissors beat paper. You Lose!';
  }
  else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScore++;
    return 'Rock beats scissors. You Lose!';
  }

  else if (computerSelection === 'rock' && playerSelection === 'paper') {
    playerScore++;
    return 'Paper beats rock. You win!';
  }
  else if (computerSelection === 'paper' && playerSelection === 'scissors') {
    playerScore++;
    return 'Scissors beat paper. You win!';
  }
  else if (computerSelection === 'scissors' && playerSelection === 'rock') {
    playerScore++;
    return 'Rock beats scissors. You win!';
  }
  console.log(playerScore, computerScore);
};

const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
};

const getPlayerChoice = () => {
  return prompt("Rock, Paper, or Scissors? ").toLowerCase();
};

const gameScore = () => {
  if (playerScore > computerScore) {
    return `You win with a score of ${playerScore}`;
  } else {
    return `The computer wins with a score of ${computerScore}`;
  }
};

const game = () => {
  for (let i = 1; i <= 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    gameScore();
  }
};
game();
showScore();