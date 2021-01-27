console.log('Welcome!');
/***Model***/

const player1 = 'X', player2 = 'O';
var currentPlayer = player1;
var playerOnDeck = player2;

const squares = Array.from(document.getElementsByTagName('td'));
const allXs = (value) => value === 'X';
const allOs = (value) => value === 'O';

const winningScenarios = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7],
                          [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

const updateSquare = (square) => {
  if (square.innerHTML === '') {
    square.innerHTML = currentPlayer;
    [currentPlayer, playerOnDeck] = [playerOnDeck, currentPlayer]; //flips currentPlayers
  } else if (square.innerHTML !== '') {
    alert('This square has been CLAIMED!!!\nPlease select an empty square.');
    return;
  };
  displayWhoseTurnItIs(currentPlayer);
};

const determineEndGame = () => {
  let squareValues = [];
  squares.forEach((square) => {
    let letter = square.innerText;
    squareValues.push(letter);
  });
  for (winningCombo of winningScenarios) {
    var comboToCompare = [];
    for (var i = 0; i < winningCombo.length; i++) {
      let currentPosition = winningCombo[i] - 1;
      let valueToCompare = squareValues[currentPosition];
      comboToCompare.push(valueToCompare);
    };
    if (comboToCompare.every(allXs)) {
      alert(`Winner Winner Chicken Dinner! Player 1 wins`);
      return;
    } else if (comboToCompare.every(allOs)) {
      alert(`Winner Winner Chicken Dinner! Player 2 wins`);
      return;
    } else {
      continue;
    };
  };
  if (!squareValues.includes('')) {
    alert(`It's a draw`);
    return;
  };
};
/****View****/

const displayWhoseTurnItIs = (currentPlayer) => {
  let whoseTurn = document.querySelector('#whose_turn');
  let displayPlayer;
  currentPlayer === player1 ? displayPlayer = 'Player 1' : displayPlayer = 'Player 2';

  whoseTurn.innerHTML = 'It\'s ' + displayPlayer + '\'s turn';
}
const emptySquares = () => {  // is this view???
  squares.forEach(square => {
    square.innerHTML = '';
  });
};
/***Control:***/

const board = document.querySelector(".gameboard")
  .addEventListener("click", (event) => {
    const square = event.target;
    updateSquare(square);
    setTimeout(() => determineEndGame(), 500);
  });

let resetButton = document.querySelector("#restart")
  .addEventListener("click", event => {
    emptySquares();
    currentPlayer = player1;
    console.log('Board Reset');
  });

