// tic tac toe

// The HTML elements that we need for the game
const board = document.querySelector('#board');
const player1 = document.querySelector('.js-player-1');
const player2 = document.querySelector('.js-player-2');
const endMessageDiv = document.querySelector('.js-end-message');
const restartBtn = document.querySelector('.restart');

// this array tracks the state of the game board.
const game = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// Game Settings
const PLAYER_1_ICON = 'X';
const PLAYER_2_ICON = 'O';
let COUNTER = 0; // track game progress
let winner;

// game starts with player 1
let currentPlayer = '1';
player1.classList.add('active');


const handleRestart = () => {
  location.reload();
};

const toggleRestartBtn = () => {
  restartBtn.disabled = false;
};

const win = () => {
  // stop board from being clickable
  // print the winner to the screen
  // activate the restart btn
  alert(`${winner} won!`);
};

const verifyWin = () => {
  // if (game[0] === 'x' && game[1] === 'x' && game[2] === 'x');
  // alert(`someone won`)
  if (game[0] === game[1] && game[1] === game[2]) win();{
  winner = game[0];
  win();
  }
  if (game[3] === game[4] && game[4] === game[5]) win();{
  winner = game[3];
  win();
  }
  if (game[6] === game[7] && game[7] === game[8]) win();{
    winner = game[6];
    win();
    }
  // COLUMNS
  if (game[0] === game[3] && game[3] === game[6]) win();{
    winner = game[0];
    win();
    }
  if (game[1] === game[4] && game[4] === game[7]) win();{
    winner = game[1];
    win();
    }
  if (game[2] === game[5] && game[5] === game[8]) win();{
    winner = game[2];
    win();
    }
  // DIAGONALS
  if (game[0] === game[4] && game[4] === game[8]) win();{
    winner = game[0];
    win();
    }
  if (game[2] === game[4] && game[4] === game[6]) win(); {
    winner = game[2];
    win();
  }
};

const togglePlayer = () => {
  // use .active to show active player visually...
};

const handleClick = (event) => {
  const cell = event.target.id;
  const currentCellDiv = document.getElementById(cell);
  const cellId = cell.charAt(cell.length - 1);
  const icon = currentPlayer === '1' ? PLAYER_1_ICON : PLAYER_2_ICON;
  toggleRestartBtn();


  if (typeof game[cellId] === 'number') {
    currentCellDiv.innerText = icon;

    // so much missing here...
    currentPlayer === '1' ? currentPlayer = '2' : currentPlayer = '1';
    game[cellid] = icon;
    verifyWin();
    console.log(game);
  }
};

board.addEventListener('click', handleClick);
restartBtn.addEventListener('click', handleRestart);
