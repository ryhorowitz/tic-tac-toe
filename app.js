console.log('Welcome!');
/***Model***/ 

const player1 = 'X', player2 = 'O';
var currentPlayer = player1;
var playerOnDeck = player2;

const updateSquare = (square) => {
  if (square.innerHTML === '') {
    square.innerHTML = currentPlayer;
    [currentPlayer, playerOnDeck] = [playerOnDeck, currentPlayer];
  } else if (square.innerHTML !== '') {
    alert('This square has been CLAIMED!!!\nPlease select an empty square.');
    return;
  };
  // end game scenarios win/tie
  console.log('square.innerHTML', square.innerHTML);
  displayWhoseTurnItIs(currentPlayer);
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
  })
