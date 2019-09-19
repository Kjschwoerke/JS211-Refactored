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
    }
  }
}

//Created Global Variables Here:
let white = new Checker('white')
let black = new Checker('black')
let playerTurn = "blackTurn"


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
      console.log (this.checkers)
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


    if (this.board.grid[startRow][startCol] = white && addNine == toWhere || addEleven == toWhere && this.board.grid[endRow][endCol] === null) {
      console.log('success')
      this.board.grid[endRow][endCol] = white
      this.board.grid[startRow][startCol] = null
    }else if(this.board.grid[startRow][startCol] = white && addTwentytwo == toWhere && this.board.grid[jumpAddElevenRow][jumpAddElevenColumn] == black){
      this.board.grid[endRow][endCol] = white
      this.board.grid[jumpAddElevenRow][jumpAddElevenColumn] = null
      this.board.checkers.pop()
      this.board.grid[startRow][startCol] = null
    }else if(this.board.grid[startRow][startCol] = white && addEighteen== toWhere && this.board.grid[jumpAddNineRow][jumpAddNineColumn] == black){
      this.board.grid[endRow][endCol] = rowWhite
      this.board.grid[jumpAddNineRow][jumpAddNineColumn] = null
      this.board.checkers.pop()
      this.board.grid[startRow][startCol] = null
    }else if(this.board.grid[startRow][startCol] = black && minusNine == toWhere || minusEleven == toWhere && this.board.grid[endRow][endCol] === null) {
      console.log('success') 
      this.board.grid[endRow][endCol] = black
      this.board.grid[startRow][startCol] = null
    }else if(this.board.grid[startRow][startCol] = black && minusTwentytwo == toWhere && this.board.grid[jumpMinusElevenRow][jumpMinusElevenColumn] == white){
      this.board.grid[endRow][endCol] = black
      this.board.grid[jumpMinusElevenRow][jumpMinusElevenColumn] = null
      this.board.checkers.pop()
      this.board.grid[startRow][startCol] = null
    }else if(this.board.grid[startRow][startCol] = black && minusEighteen== toWhere && this.board.grid[jumpMinusNineRow][jumpMinusNineColumn] == white){
      this.board.grid[endRow][endCol] = black
      this.board.grid[jumpMinusNineRow][jumpMinusNineColumn] = null
      this.board.checkers.pop()
      this.board.grid[startRow][startCol] = null
    }else{
      console.log ('invalid move detected')
    }
  }

  //Track and Console.log the current player turn
  playerTurnTrack(){
    if (playerTurn === "whiteTurn"){
      console.log("It is the White Player's Turn")
      playerTurn = "blackTurn"
    }else if(playerTurn === "blackTurn"){ 
      console.log("It is the Black Player's Turn")
      playerTurn = "whiteTurn"
    }
  }
}


function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      game.playerTurnTrack()
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
