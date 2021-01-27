console.log('Welcome!');
/***Model***/ 

const player1 = 'X', player2 = 'O';
var currentPlayer = player1;
var playerOnDeck = player2;

const squares = Array.from(document.getElementsByTagName('td'));
const allXs = (value) => value === 'X';
const allYs = (value) => value === 'Y';

const winningScenarios = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], 
                          [2,5,8], [3,6,9], [1,5,9], [3,5,7]];

//const boardIsFull = (squares) => squares.includes("") ? false : true;

const updateSquare = (square) => {
  if (square.innerHTML === '') {
    square.innerHTML = currentPlayer;
    [currentPlayer, playerOnDeck] = [playerOnDeck, currentPlayer];
  } else if (square.innerHTML !== '') {
    alert('This square has been CLAIMED!!!\nPlease select an empty square.');
    return;
  };
  // end game scenarios win/tie
//  console.log('square.innerHTML', square.innerHTML);
  displayWhoseTurnItIs(currentPlayer);
};

const determineEndGame = () => {
  //win
  // if three squares have the same value in a horizontal, vertical, diagonal row;
  var comboToCompare = [];
  let squareValues = [];
  squares.forEach( (square) => {
    let letter = square.innerText;
    squareValues.push(letter);
  }); 
  console.log('ids and Values Array', squareValues);
  for (winningCombo of winningScenarios) { //[1,2,3]
    for (var i = 0; i<winningCombo.length; i++) {
      comboToCompare.push(squareValues[i])
    };
    debugger; //I AM NOT LOOPING CORRECTLY
    console.log('comboToCompare', comboToCompare);
    if (comboToCompare.every(allXs)) {
      alert(`Winner Winner Chicken Dinner! Player 1 wins`)
    } else if (comboToCompare.every(allYs)) {   
      alert(`Winner Winner Chicken Dinner! Player 2 wins`)
    } else if (!squareValues.includes('')) {
      alert(`It's a draw`)
      break
    } else {
      return;
    };
  };
};
/****View****/

const displayWhoseTurnItIs = (currentPlayer) => {
  //select id"whose_turn"
  let whoseTurn = document.querySelector('#whose_turn')
  // set innerHTML to currentPlayer
  let displayPlayer;
  currentPlayer === player1 ? displayPlayer = 'Player 1' : displayPlayer = 'Player 2';

  whoseTurn.innerHTML = 'It\'s ' + displayPlayer + '\'s turn';
}

/*
Control: 
"Accepts input, converts its input to commands for the model or view."
if player 1 clicks a square trigger something to update the model
What are my options here???
*/
//eventListeners for squares for each <td> tag
const board = document.querySelector(".gameboard")
  .addEventListener("click", (event)=> {
    const square = event.target;
    updateSquare(square);
    determineEndGame();
  })
