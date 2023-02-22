// required for user input in console
const prompt = require('prompt-sync')();

// round conditionals
function playRound (playerSelection, computerSelection) {
  if (computerSelection === playerSelection) {
    return 'Draw!';
  }
  else if (playerSelection === 'rock' && computerSelection === 'paper') {
    return 'Paper beats rock. You Lose!';
  }
  else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return 'Scissors beat paper. You Lose!';
  }
  else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return 'Rock beats scissors. You Lose!';
  }

  else if (computerSelection === 'rock' && playerSelection === 'paper') {
    return 'Paper beats rock. You win!';
  }
  else if (computerSelection === 'paper' && playerSelection === 'scissors') {
    return 'Scissors beat paper. You win!';
  }
  else if (computerSelection === 'scissors' && playerSelection === 'rock') {
    return 'Rock beats scissors. You win!';
  }
}

const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const randomChoice = Math.floor(Math.random() * choices.length);
  console.log(choices[randomChoice]);
  return choices[randomChoice];
};

const getPlayerChoice = () => {
 return prompt("Rock, Paper, or Scissors? ");
};

const game = () => {
  for (let i = 1; i <= 5; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
};
game();