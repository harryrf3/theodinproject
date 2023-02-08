// required for user input in console
const prompt = require('prompt-sync')();

// round conditionals
function playRound (playerSelection, computerSelection) {

  // your code here!
  if (playerSelection == 'rock' && computerSelection == 'paper') {
    return 'Paper beats rock. You Lose!';
  }
  if (playerSelection == 'paper' && computerSelection == 'scissors') {
    return 'Scissors beat paper. You Lose!';
  }
  if (playerSelection == 'scissors' && computerSelection == 'rock') {
    return 'Rock beats scissors. You Lose!';
  }

  if (computerSelection == 'rock' && playerSelection == 'paper') {
    return 'Paper beats rock. You win!';
  }
  if (computerSelection == 'paper' && playerSelection == 'scissors') {
    return 'Scissors beat paper. You win!';
  }
  if (computerSelection == 'scissors' && playerSelection == 'rock') {
    return 'Rock beats scissors. You win!';
  }
  if (computerSelection === computerSelection) {
    return 'Draw!';
  }

  // console.log(playerSelection, computerSelection);
}
//* working properly
const getComputerChoice = () => {
  const choice = Math.floor(Math.random() * 3) + 1;
  switch (choice) {
    case 1:
      computer = "rock";
      break;
    case 2:
      computer = "paper";
      break;
    case 3:
      computer = "scissors";
      break;
  }
  return computer;
};
// console.log(getComputerChoice());

const getPlayerChoice = () => {
  prompt("Rock, Paper, or Scissors? ");
};

const game = () => {
  for (let i = 1; i < 5; i++) {
    getComputerChoice();
    getPlayerChoice();

    playRound();
  }
};

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
game()










//////////////////////////////////////////////////////////////////////////////



// function playRound (playerSelection, computerSelection) {
//   // getPlayerChoice();
//   // getComputerChoice();
//   // console.log(message);
//   if (playerSelection === computerSelection) {
//     return "Draw!";
//   }
//   if (computerSelection == "Rock") {
//     return playerSelection = "Paper" ? "You win!" : "You lose!";
//   }
//   if (computerSelection == "Paper") {
//     return playerSelection = "Scissors" ? "You win!" : "You lose!";
//   }
//   if (computerSelection == "Scissors") {
//     return playerSelection = "Rock" ? "You win!" : "You lose!";
//   }
// }

// const game = () => {
//   for (let i = 0; i < 4; i++) {
//     console.log(getPlayerChoice()); 
//     console.log(getComputerChoice());
//     console.log(playRound());
//   }
// };

// const getPlayerChoice = () => {
//   prompt("Rock, Paper, or Scissors? ");
// };

// const getComputerChoice = () => {
//   const choice = Math.floor(Math.random() * 3) + 1;
//   switch (choice) {
//     case 1:
//       computer = "Rock";
//       break;
//     case 2:
//       computer = "Paper";
//       break;
//     case 3:
//       computer = "Scissors";
//       break;
//   }
//   return computer;
// };

// // const playerSelection = "scissors";
// // const computerSelection = "rock";
// const playerSelection = getPlayerChoice();
// const computerSelection = getComputerChoice();
// // console.log(playRound(playerSelection, computerSelection));
// game();

// /////////////////////////////////////////////////////////////////////////////
// function game () {
//   for (let i = 0; i < 4; i++) {
//     console.log(getPlayerChoice());
//     console.log(getComputerChoice());
//     console.log(playRound());
//   }
// }

// function playRound (playerSelection, computerSelection) {
//   let message;

//   if (playerSelection == computerSelection) {
//     message = "Draw!";
//   }
//   else if (computerSelection == "Rock") {
//     return playerSelection = "Paper" ? "You Win!" : "You Lose";
//   }
//   else if (computerSelection == "Paper") {
//     return playerSelection = "Scissors" ? "You Win!" : "You Lose";
//   }
//   else if (computerSelection == "Scissors") {
//     return playerSelection = "Rock" ? "You Win!" : "You Lose";
//   }
//   return message;
// }

// const getComputerChoice = () => {
//   const choice = Math.floor(Math.random() * 3) + 1;
//   switch (choice) {
//     case 1:
//       computer = "Rock";
//       break;
//     case 2:
//       computer = "Paper";
//       break;
//     case 3:
//       computer = "Scissors";
//   }
//   // console.log(computer);
//   return computer;
// };

// const getPlayerChoice = () => {
//   prompt("Rock, Paper, or Scissors?");
// };


// // const playerSelection = "Rock";
// const playerSelection = getPlayerChoice();
// const computerSelection = getComputerChoice();
// // console.log(playRound(playerSelection, computerSelection));
// game();