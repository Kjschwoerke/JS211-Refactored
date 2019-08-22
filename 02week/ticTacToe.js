'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';


function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}
//Set Winning Conditions for the Game
let one = board [0][0]
let two = board [0][1]
let three = board [0][2]
let four = board [1][0]
let five = board [1][1]
let six = board [1][2]
let seven = board [2][0]
let eight = board [2][1]
let nine = board [2][2]

//Functions to determine win conditions for player 'X' and 'O'

//Victory Conditions for Player 'X'
function horizontalWin() {
  function horizontalWinX() {
    if (board [0][0] === 'X' && board [0][1] === 'X' && board [0][2] === 'X' || board [1][0] === 'X' && board [1][1] === 'X' && board [1][2] === 'X' || board [2][0] === 'X' && board [2][1] === 'X' && board [2][2] === 'X') 
    {return true} else {return false}
  }

  function horizontalWinO() {
    if (board [0][0] === 'O' && board [0][1] === 'O' && board [0][2] === 'O' || board [1][0] === 'O' && board [1][1] === 'O' && board [1][2] === 'O' || board [2][0] === 'O' && board [2][1] === 'O' && board [2][2] === 'O') 
    {return true} else {return false}
  }
if (playerTurn === 'X'){
  horizontalWinX()}else{
  horizontalWinO()}

if (horizontalWinX()===true) {return true}
else if (horizontalWinO()===true){return false}
}


function verticalWin() {
  function verticalWinX() {
   if (board [0][0] === 'X' && board [1][0] === 'X' && board [2][0] === 'X' || board [0][1] === 'X' && board [1][1] === 'X' && board [2][1] === 'X' || board [0][2] === 'X' && board [1][2] === 'X' && board [2][2] === 'X')
  {return true} else {return false}
}

function verticalWinO() {
  if (board [0][0] === 'O' && board [1][0] === 'O' && board [2][0] === 'O' || board [0][1] === 'O' && board [1][1] === 'O' && board [2][1] === 'O' || board [0][2] === 'O' && board [1][2] === 'O' && board [2][2] === 'O')
  {return true} else {return false}
}

if (playerTurn === 'X'){
  verticalWinX()}else{
  verticalWinO()}

if (verticalWinX()===true) {return true}
else if (verticalWinO()===true){return false}
}


function diagonalWin(){

function diagonalWinX() {
 if (board [0][0] === 'X' && board [1][1] === 'X' && board [2][2] === 'X' || board [0][2] === 'X' && board [1][1] === 'X' && board [2][0] === 'X')
  {return true} else {return false}
}
function diagonalWinO() {
  if (board [0][0] === 'O' && board [1][1] === 'O' && board [2][2] === 'O' || board [0][2] === 'O' && board [1][1] === 'O' && board [2][0] === 'O')
   {return true} else {return false}
 }
 if (playerTurn === 'X'){
  diagonalWinX()}else{
  diagonalWinO()}

if (diagonalWinX()===true) {return true}
else if (diagonalWinO()===true){return false}
}
//Victory Conditions for Player 'O'





//Call functions for win conditions
horizontalWin()
//horizontalWinX()
verticalWin()
diagonalWin()
//horizontalWinO()
//verticalWinO()
//diagonalWinO()
//define variables to be used in the function to determineWinner() for determining the winner


function checkForWin(){
  if (horizontalWin()===true||verticalWin()===true||diagonalWin()===true){return true}else if (horizontalWin()===false||verticalWin()===false||diagonalWin()===false){return false}
}

checkForWin()
/*//horizontal win conditions


function horizontalWin() {
  
  
}

//vertical win conditions



function verticalWin() {
  
  
}

//diagonal win conditions



function diagonalWin() {
  
}

//Check to see if winning conditions have occurred and console.log the winner.


function checkForWin() {
   
}*/

  

// enter player mark on the board in the chosen column and change player turn.
function ticTacToe(row, column) {
  board[row][column] = playerTurn
    if (playerTurn === 'X'){playerTurn='O'}
    else if (playerTurn ==='O'){playerTurn ='X'}
    if (checkForWin() === true){console.log("The winner is player X!!!")}else if (checkForWin()=== false){console.log("The winner is player O!!!")}
}


function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  checkForWin();
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });
}
  

// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
