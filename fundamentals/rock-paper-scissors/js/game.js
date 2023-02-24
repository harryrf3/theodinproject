// required for user input in console
// const prompt = require('prompt-sync')();

const pScore = document.querySelector('.playerScore');
const cScore = document.querySelector('.computerScore');
const rMessage = document.querySelector('.roundMessage');
const buttons = document.querySelectorAll('.btn');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

let playerScore = 0;
let computerScore = 0;
let playerChoice;
let round = 0;


// round conditionals
const playRound = (playerSelection, computerSelection) => {
  if (computerSelection === playerSelection) {
    // playerScore++;
    // computerScore++;
    pScore.innerText = `player: ${playerScore}`;
    cScore.innerText = `computer: ${computerScore}`;
    rMessage.innerText = 'Draw';
    return 'Draw!';
  }
  // player loss
  else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'rock')) {
    computerScore++;
    pScore.innerText = `player: ${playerScore}`;
    cScore.innerText = `computer: ${computerScore}`;
    return rMessage.innerText = `You lose, ${computerSelection} beats ${playerSelection}.`;
  }

  // player win
  else if ((computerSelection === 'rock' && playerSelection === 'paper') ||
    (computerSelection === 'paper' && playerSelection === 'scissors') ||
    (computerSelection === 'scissors' && playerSelection === 'rock')) {
    playerScore++;
    pScore.innerText = `player: ${playerScore}`;
    cScore.innerText = `computer: ${computerScore}`;
    return rMessage.innerText = `You win, ${computerSelection} beats ${playerSelection}.`;
  }
};


const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
};


buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    playerChoice = button.id;
    if (playerChoice === 'rock') {
      playerChoice = 'rock';
      console.log(button.id);
      game()
    }
    if (playerChoice == 'paper') {
      playerChoice = 'paper';
      console.log(button.id);
      game()
    }
    if (playerChoice == 'scissors') {
      playerChoice = 'scissors';
      console.log(button.id);
      game()
    }
  });
});


const gameScore = () => {
  if (playerScore > computerScore) {
    rMessage.innerText = `You win with a score of ${playerScore}`;
    return `You win with a score of ${playerScore}`;
  } else {
    rMessage.innerText = `The computer wins with a score of ${computerScore}`;
    return `The computer wins with a score of ${computerScore}`;
  }
};


const game = () => {
  if (round < 5) {
    const playerSelection = playerChoice;
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    round++
    gameScore();
  }
};