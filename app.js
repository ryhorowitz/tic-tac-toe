console.log('Welcome!');
//MVC Framework mock up
/* 
Model: 
the functions and methods definitions.
Should manage App state, even if not using react.*/
//update board function
const updateSquare = (square) => {
  if (square.innerHTML === '') {
    return square.innerHTML = 'X';
  };
  
};
/*
View: 
At the Bare minimum a tic-tac-toe board and a button
im really hung up about implementing the board
the button that resets the game
*/


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
