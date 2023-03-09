let currentPlayer = 'X';
let gameEnded = false;
const cells = document.querySelectorAll('.square');


function changePlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}


function handleClick() {
  if (gameEnded) {
    return;
  }

  if (this.textContent !== '') {
    return;
  }

  this.textContent = currentPlayer;

  if (checkWin()) {
    document.querySelector("#message").textContent = `${currentPlayer} wins!`;
  } else if (checkDraw()) {
    document.querySelector('#message').textContent = "It's a draw!";
    gameEnded = true;
  } else {
    changePlayer();
  }
}

function checkWin() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];

    if (cells[a].textContent === "" ||
      cells[b].textContent === "" ||
      cells[c].textContent === "") {
      continue;
    }

    if (cells[a].textContent === cells[b].textContent &&
      cells[b].textContent === cells[c].textContent) {
      return true;
    }
  }
  return false;
}

function checkDraw() {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].textContent === "") {
      return false;
    }
  }
  return true;
}


function reset() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
  }
  document.querySelector("#message").textContent = "";
  gameEnded = false;
  currentPlayer = "X";
}

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", handleClick);
}