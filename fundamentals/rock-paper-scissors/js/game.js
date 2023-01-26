const prompt = require('prompt-sync')();

function playRound (playerSelection, computerSelection) {
  let message;
  // console.log(message);
  if (playerSelection == computerSelection) {
    message = "Draw!";
  }
  else if (computerSelection == "Rock") {
    return playerSelection = "Paper" ? "You win!" : "You lose!";
  }
  else if (computerSelection == "Paper") {
    return playerSelection = "Scissors" ? "You win!" : "You lose!";
  }
  else if (computerSelection == "Scissors") {
    return playerSelection = "Rock" ? "You win!" : "You lose!";
  }

  return message;
}

const game = () => {
  for (let i = 0; i < 4; i++) {
    playRound();
    getPlayerChoice();
    getComputerChoice();
  }
};

const getPlayerChoice = () => {
  prompt("Rock, Paper, or Scissors? ");
};

const getComputerChoice = () => {
  const choice = Math.floor(Math.random() * 3) + 1;
  switch (choice) {
    case 1:
      computer = "Rock";
      break;
    case 2:
      computer = "Paper";
      break;
    case 3:
      computer = "Scissors";
  }
  // console.log(computer);
  return computer;
};

// const playerSelection = "scissors";
// const computerSelection = "rock";
const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
game();

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