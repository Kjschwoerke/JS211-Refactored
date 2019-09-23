'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Your code here
class Checker {
  constructor(color) {
    if (color === 'white') {
      this.symbol = String.fromCharCode(0x125CF);
    }else if(color === 'black') {
      this.symbol = String.fromCharCode(0x125CB);
    }else if(color === 'whiteKing') {
      this.symbol = 'WK';
    }else if(color === 'blackKing') {
      this.symbol = 'BK';
    }
  }
}

//Created Global Variables Here:
const white = new Checker('white')
const whiteKing = new Checker('whiteKing')
const black = new Checker('black')
const blackKing = new Checker('blackKing')
let playerTurn = "Black"



class Board {
  constructor() {
    this.grid = []
    this.checkers = []
    
  }


 //selectChecker(row, column){
   //return this.grid[row][column].checkers
//}

  // method that creates an 8x8 array, filled with null values
  createGrid() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  }
  viewGrid() {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);

  }
  
  initializeGrid() {

    //White Pieces Initial Start
    for (let rowWhite = 0; rowWhite<3; rowWhite++){
      for(let colWhite = 0; colWhite<8; colWhite++){
        if (rowWhite%2===0&&colWhite%2===1){
          this.grid[rowWhite][colWhite] = white
        }else if (rowWhite%2===1&&colWhite%2===0){
          this.grid[rowWhite][colWhite] = white
        }
      }
    }
  
    //Black Pieces Initial Start
    for (let rowBlack = 5; rowBlack<8; rowBlack++){
      for(let colBlack = 0; colBlack<8; colBlack++){
        if (rowBlack%2===0&&colBlack%2===1){
          this.grid[rowBlack][colBlack] = black
        }else if (rowBlack%2===1&&colBlack%2===0){
          this.grid[rowBlack][colBlack] = black
        }
      }
    }
  }
  
  // Your code here
    createCheckers(){
    for (let i=0; i<12; i++){
      this.checkers.push(white)
      this.checkers.push(black)
      }
      //console.log (this.checkers)
    }
}

class Game {
  constructor() {
    this.board = new Board;
  }
  start() {
    this.board.createGrid();
    this.board.createCheckers();
    this.board.initializeGrid();
  }

   //Track and Console.log the current player turn
  
  playerTurnTrack(){
    if (playerTurn === "White"){
      playerTurn = "Black"
    }else if(playerTurn === "Black"){
      playerTurn = "White"
    }
  }

  //Move Checker and check for valid move

  moveChecker(whichPiece, toWhere) {
   let addNine = parseInt(whichPiece) + 9
   let addEleven = parseInt(whichPiece) + 11
   let minusNine = parseInt(whichPiece) - 9
   let minusEleven = parseInt(whichPiece) - 11
   let addEighteen = parseInt(whichPiece) + 18
   let addTwentytwo = parseInt(whichPiece) + 22
   let minusEighteen = parseInt(whichPiece) - 18
   let minusTwentytwo = parseInt(whichPiece) - 22
   let start = whichPiece.split('')
   let end = toWhere.split('')
   let startRow=start[0]
   let startCol=start[1]
   let endRow=end[0]
   let endCol=end[1]
   let addNineStart = addNine.toString().split('')
   let addElevenStart = addEleven.toString().split('')
   let minusNineStart = minusNine.toString().split('')
   let minusElevenStart = minusEleven.toString().split('')
   let jumpAddNineRow = addNineStart[0]
   let jumpAddNineColumn = addNineStart[1]
   let jumpAddElevenRow = addElevenStart[0]
   let jumpAddElevenColumn = addElevenStart[1]
   let jumpMinusNineRow = minusNineStart[0]
   let jumpMinusNineColumn = minusNineStart[1]
   let jumpMinusElevenRow = minusElevenStart[0]
   let jumpMinusElevenColumn = minusElevenStart[1]

    //Normal Movement and Jumps
    //White Piece Moves
    if (playerTurn === 'White' && this.board.grid[startRow][startCol] === white && this.board.grid[startRow][startCol] !== black && this.board.grid[startRow][startCol] !== whiteKing && this.board.grid[startRow][startCol] !== blackKing &&(addNine == toWhere || addEleven == toWhere)&& this.board.grid[endRow][endCol] === null) {
      console.log('W1')
      console.log(this.board.grid[startRow][startCol])
      this.board.grid[endRow][endCol] = white
      this.board.grid[startRow].splice([startCol], 1, null)
      game.playerTurnTrack()
    }
    else if(playerTurn === 'White' && this.board.grid[startRow][startCol] === white && this.board.grid[startRow][startCol] !== black && this.board.grid[startRow][startCol] !== whiteKing && this.board.grid[startRow][startCol] !== blackKing && addTwentytwo == toWhere && this.board.grid[jumpAddElevenRow][jumpAddElevenColumn] == black){
      console.log('W2')
      this.board.grid[endRow][endCol] = white
      this.board.grid[jumpAddElevenRow].splice([jumpAddElevenColumn], 1, null)
      this.board.checkers.pop()
      this.board.grid[startRow].splice([startCol], 1, null)
      game.playerTurnTrack()
    }
    else if(playerTurn === 'White' && this.board.grid[startRow][startCol] === white && this.board.grid[startRow][startCol] !== black  && this.board.grid[startRow][startCol] !== whiteKing && this.board.grid[startRow][startCol] !== blackKing && addEighteen == toWhere && this.board.grid[jumpAddNineRow][jumpAddNineColumn] == black){
      console.log('W3')
      this.board.grid[endRow][endCol] = white
      this.board.grid[jumpAddNineRow].splice([jumpAddNineColumn], 1, null)
      this.board.checkers.pop()
      this.board.grid[startRow].splice([startCol], 1, null)
      game.playerTurnTrack()
    }
      //Black Piece moves
      else if(playerTurn === 'Black' && this.board.grid[startRow][startCol] === black && this.board.grid[startRow][startCol] !== white  && this.board.grid[startRow][startCol] !== whiteKing && this.board.grid[startRow][startCol] !== blackKing && (minusNine == toWhere || minusEleven == toWhere) && this.board.grid[endRow][endCol] === null) {
      console.log('B1', this.board.grid[startRow][startCol], this.board.grid[startRow][startCol] === black) 
      this.board.grid[endRow][endCol] = black
      this.board.grid[startRow].splice([startCol], 1, null)
      game.playerTurnTrack()
    }
    else if(playerTurn === 'Black' && this.board.grid[startRow][startCol] === black && this.board.grid[startRow][startCol] !== white  && this.board.grid[startRow][startCol] !== whiteKing && this.board.grid[startRow][startCol] !== blackKing && minusTwentytwo == toWhere && this.board.grid[jumpMinusElevenRow][jumpMinusElevenColumn] == white){
      console.log('B2')
      this.board.grid[endRow][endCol] = black
      this.board.grid[jumpMinusElevenRow].splice([jumpMinusElevenColumn], 1, null)
      this.board.checkers.pop()
      this.board.grid[startRow].splice([startCol], 1, null)
      game.playerTurnTrack()
    }
    else if(playerTurn === 'Black' && this.board.grid[startRow][startCol] === black  && this.board.grid[startRow][startCol] !== white && this.board.grid[startRow][startCol] !== whiteKing && this.board.grid[startRow][startCol] !== blackKing && minusEighteen == toWhere && this.board.grid[jumpMinusNineRow][jumpMinusNineColumn] == white){
      console.log('B3')
      this.board.grid[endRow][endCol] = black
      this.board.grid[jumpMinusNineRow].splice([jumpMinusNineColumn], 1, null)
      this.board.checkers.pop()
      this.board.grid[startRow].splice([startCol], 1, null)
      game.playerTurnTrack()
    }


    //King Movement ('White')
    else if (playerTurn === 'White' && this.board.grid[startRow][startCol] === 'WK' &&(addNine == toWhere || addEleven == toWhere) && this.board.grid[endRow][endCol] === null) {
      console.log('KW1')
      this.board.grid[endRow][endCol] = whiteKing
      this.board.grid[startRow][startCol] = null
      game.playerTurnTrack()
    }
    else if(playerTurn == 'White' && this.board.grid[startRow][startCol] === 'WK' && addTwentytwo == toWhere && this.board.grid[jumpAddElevenRow][jumpAddElevenColumn] == black || this.board.grid[jumpAddElevenRow][jumpAddElevenColumn] == blackKing){
      console.log('KW2')
      this.board.grid[endRow][endCol] = whiteKing
      this.board.grid[jumpAddElevenRow][jumpAddElevenColumn] = null
      this.board.checkers.pop()
      this.board.grid[startRow][startCol] = null
      game.playerTurnTrack()
    }
    else if(playerTurn === 'White' && this.board.grid[startRow][startCol] === 'WK' && addEighteen== toWhere && this.board.grid[jumpAddNineRow][jumpAddNineColumn] == black || this.board.grid[jumpAddNineRow][jumpAddNineColumn] == blackKing){
      console.log('KW3')
      this.board.grid[endRow][endCol] = whiteKing
      this.board.grid[jumpAddNineRow][jumpAddNineColumn] = null
      this.board.checkers.pop()
      this.board.grid[startRow][startCol] = null
      game.playerTurnTrack()
    }
    else if(playerTurn === 'White' && this.board.grid[startRow][startCol] === 'WK' && (minusNine == toWhere || minusEleven == toWhere) && this.board.grid[endRow][endCol] === null) {
      console.log('KW4') 
      this.board.grid[endRow][endCol] = whiteKing
      this.board.grid[startRow][startCol] = null
      game.playerTurnTrack()
    }
    else if(playerTurn === 'White' && this.board.grid[startRow][startCol] === 'WK' && minusTwentytwo == toWhere && this.board.grid[jumpMinusElevenRow][jumpMinusElevenColumn] == black || this.board.grid[jumpMinusElevenRow][jumpMinusElevenColumn] == blackKing){
      console.log('KW5')
      this.board.grid[endRow][endCol] = whiteKing
      this.board.grid[jumpMinusElevenRow][jumpMinusElevenColumn] = null
      this.board.checkers.pop()
      this.board.grid[startRow][startCol] = null
      game.playerTurnTrack()
    }
    else if(playerTurn === 'White' && this.board.grid[startRow][startCol] === 'WK' && minusEighteen== toWhere && this.board.grid[jumpMinusNineRow][jumpMinusNineColumn] == black || this.board.grid[jumpMinusNineRow][jumpMinusNineColumn] == blackKing){
      console.log('KW6')
      this.board.grid[endRow][endCol] = whiteKing
      this.board.grid[jumpMinusNineRow][jumpMinusNineColumn] = null
      this.board.checkers.pop()
      this.board.grid[startRow][startCol] = null
      game.playerTurnTrack()
    }


    //King Movement ('Black')
    else if (playerTurn === 'Black' && this.board.grid[startRow][startCol] === 'BK' && (addNine == toWhere || addEleven == toWhere) && this.board.grid[endRow][endCol] === null) {
      console.log('KB1')
      this.board.grid[endRow][endCol] = blackKing
      this.board.grid[startRow][startCol] = null
      game.playerTurnTrack()
    }
    else if(playerTurn === 'Black' && this.board.grid[startRow][startCol] === 'BK' && addTwentytwo == toWhere && this.board.grid[jumpAddElevenRow][jumpAddElevenColumn] == white || this.board.grid[jumpAddElevenRow][jumpAddElevenColumn] == whiteKing){
      console.log('KB2')
      this.board.grid[endRow][endCol] = blackKing
      this.board.grid[jumpAddElevenRow][jumpAddElevenColumn] = null
      this.board.checkers.pop()
      this.board.grid[startRow][startCol] = null
      game.playerTurnTrack()
    }
    else if(playerTurn === 'Black' && this.board.grid[startRow][startCol] === 'BK' && addEighteen== toWhere && this.board.grid[jumpAddNineRow][jumpAddNineColumn] == white || this.board.grid[jumpAddNineRow][jumpAddNineColumn] == whiteKing){
      console.log('KB3')
      this.board.grid[endRow][endCol] = blackKing
      this.board.grid[jumpAddNineRow][jumpAddNineColumn] = null
      this.board.checkers.pop()
      this.board.grid[startRow][startCol] = null
      game.playerTurnTrack()
    }
    else if(playerTurn === 'Black' && this.board.grid[startRow][startCol] === 'BK' && (minusNine == toWhere || minusEleven == toWhere) && this.board.grid[endRow][endCol] === null) {
      console.log('KB4') 
      this.board.grid[endRow][endCol] = blackKing
      this.board.grid[startRow][startCol] = null
      game.playerTurnTrack()
    }
    else if(playerTurn === 'Black' && this.board.grid[startRow][startCol] === 'BK' && minusTwentytwo == toWhere && this.board.grid[jumpMinusElevenRow][jumpMinusElevenColumn] == white || this.board.grid[jumpMinusElevenRow][jumpMinusElevenColumn] === whiteKing){
      console.log('KB5')
      this.board.grid[endRow][endCol] = whiteKing
      this.board.grid[jumpMinusElevenRow][jumpMinusElevenColumn] = null
      this.board.checkers.pop()
      this.board.grid[startRow][startCol] = null
      game.playerTurnTrack()
    }
    else if(playerTurn ==='Black' && this.board.grid[startRow][startCol] === 'BK' && minusEighteen == toWhere && this.board.grid[jumpMinusNineRow][jumpMinusNineColumn] == white || this.board.grid[jumpMinusNineRow][jumpMinusNineColumn] == whiteKing){
      console.log('KB6')
      this.board.grid[endRow][endCol] = blackKing
      this.board.grid[jumpMinusNineRow][jumpMinusNineColumn] = null
      this.board.checkers.pop()
      this.board.grid[startRow][startCol] = null
      game.playerTurnTrack()
    } else{
      console.log('Please Make A Valid Move')
    }
  }
}


function getPrompt() {
  game.board.viewGrid();
  console.log("It is the "+playerTurn+ " player's turn")
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      console.log(game.board.checkers.length)
      getPrompt();
      
    });
  });
}

const game = new Game();
game.start();

//________________________________________________________________________________________________________________________________
// Tests
//________________________________________________________________________________________________________________________________

if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', () => {
    it('should move a checker', () => {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}
