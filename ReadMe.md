*** Challenge: Tic Tac Toe ***
Basic Requirements
Starting from a blank index.html and blank app.js file, build a single-page app for a simple Tic Tac Toe game, where:

the first move always starts with player X
the app detects a win or tie and displays an appropriate message
a button resets the game for a new round of gameplay
A single page app means that once the page loads, no user-generated actions on the page may cause the entire page to reload. One way this rule could be broken in your implementation is that you might consider resetting the game state by refreshing the page. This technique is not permitted for this exercise.

For the initial version of this game, you may only use native DOM methods to listen for events and update the DOM as gameplay progresses. This means: no jQuery, React or any other libraries or frameworks. All your code should live in one file, app.js, and all your HTML should live in index.html.

For basic requirements, no CSS styling is necessary. Use the browser's default styling for all elements on your page.

MVC frameworks help you separate and manage the concerns associated with user input, rendering to the screen and managing app state. Even though you are not using any frameworks, this concept can be applied even while writing plain-vanilla javascript code. Be sure to build your app so that each category of behavior is grouped in one area of your app.js file. Use coding best practices to ensure a clear separation of concerns with well-defined interfaces.

If you get stuck or are not sure how to proceed:

you may look at the hints file for this challenge to help you along.
you may substitute the use of native DOM methods with jQuery.

***MVC Framework mock up***

***Model:***
"The central component of the pattern. It is the application's dynamic data structure, independent of the user interface.It directly manages the data, logic and rules of the application."

the functions and methods definitions.
Should manage App state, even if not using react.
What is the state?
  an Array of object literals representing the each square and their values e.g. square1: null, square2: X, square3: O

A class to define the each of the nine squares that make up the board?
player 1 is 'X'
player 2 is 'O'
player 2's representation defaults to the computer or a human?

Did the most recent players move result in a win?
  yes: Game over a player won, print out message.
  no: if the board full?
    yes: no one won thus its a tie, print out message
    no: continue the game, wait for the next event

***View:***
the presentation format which the client will interact with.
The model directly interacts with the view.

At the Bare minimum a tic-tac-toe board and a button

I could build templates with native DOM elements. HTMLTableElement?
I could be lazy and hard code a board in the index.html

the button that resets the game

***Control:***
"Accepts input, converts its imput to commands for the model or view."

event handlers, only native DOM methods
if player 1 clicks
  then tell the model to update the state

***Questions:***
Which of the M-V-C components should I spec out first? Model or View?

How does one start? It is so hard to narrow everything down into a proper order of operations.
