const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const result = document.getElementById('result');

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameEnded = false;

function checkWinner() {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      gameEnded = true;
      return gameBoard[a];
    }
  }

  if (gameBoard.every(cell => cell !== '')) {
    gameEnded = true;
    return 'draw';
  }

  return null;
}

function displayResult(winner) {
  if (winner === 'draw') {
    result.textContent = "It's a draw!";
  } else {
    result.textContent = `${winner} wins!`;
  }
}

function placeMarker(index) {
  if (gameEnded || gameBoard[index] !== '') return;

  gameBoard[index] = currentPlayer;
  cells[index].textContent = currentPlayer;

  const winner = checkWinner();
  if (winner) {
    displayResult(winner);
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function resetBoard() {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  cells.forEach(cell => cell.textContent = '');
  result.textContent = '';
  gameEnded = false;
  currentPlayer = 'X';
}
