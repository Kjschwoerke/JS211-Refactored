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

//Functions to determine win conditions for player 'X' and 'O'
//Horizontal Win Conditions
function horizontalWin() {
  function horizontalWinX() {
    if (board [0][0] === 'X' && board [0][1] === 'X' && board [0][2] === 'X' || board [1][0] === 'X' && board [1][1] === 'X' && board [1][2] === 'X' || board [2][0] === 'X' && board [2][1] === 'X' && board [2][2] === 'X') 
    {return true} else {return false}
  }

  function horizontalWinO() {
    if (board [0][0] === 'O' && board [0][1] === 'O' && board [0][2] === 'O' || board [1][0] === 'O' && board [1][1] === 'O' && board [1][2] === 'O' || board [2][0] === 'O' && board [2][1] === 'O' && board [2][2] === 'O') 
    {return true} else {return false}
  }

   
  horizontalWinX()
  horizontalWinO()

    if (horizontalWinX()===true) {return true}
else if (horizontalWinO()===true){return false}
}

//Vertical Win Conditions
function verticalWin() {
  function verticalWinX() {
    if (board [0][0] === 'X' && board [1][0] === 'X' && board [2][0] === 'X' || board [0][1] === 'X' && board [1][1] === 'X' && board [2][1] === 'X' || board [0][2] === 'X' && board [1][2] === 'X' && board [2][2] === 'X')
  {return true} else {return false}
}

function verticalWinO() {
    if (board [0][0] === 'O' && board [1][0] === 'O' && board [2][0] === 'O' || board [0][1] === 'O' && board [1][1] === 'O' && board [2][1] === 'O' || board [0][2] === 'O' && board [1][2] === 'O' && board [2][2] === 'O')
  {return true} else {return false}
}

    
  verticalWinX()
  verticalWinO()

    if (verticalWinX()===true) {return true}
else if (verticalWinO()===true){return false}
}

//Diagonal Win Conditions
function diagonalWin(){

  function diagonalWinX() {
    if (board [0][0] === 'X' && board [1][1] === 'X' && board [2][2] === 'X' || board [0][2] === 'X' && board [1][1] === 'X' && board [2][0] === 'X')
{return true} else {return false}
}

  function diagonalWinO() {
    if (board [0][0] === 'O' && board [1][1] === 'O' && board [2][2] === 'O' || board [0][2] === 'O' && board [1][1] === 'O' && board [2][0] === 'O')
{return true} else {return false}
 }
    
diagonalWinX()
diagonalWinO()

    if (diagonalWinX()===true) {return true}
else if (diagonalWinO()===true){return false}
}

//Call functions for win conditions
horizontalWin()
verticalWin()
diagonalWin()

function checkForWin(){
  if (horizontalWin()===true||verticalWin()===true||diagonalWin()===true){return true}else if (horizontalWin()===false||verticalWin()===false||diagonalWin()===false){return false}
}
checkForWin()


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
