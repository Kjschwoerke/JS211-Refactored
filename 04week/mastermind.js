'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let number = 0
let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(guess) {
  let answer = solution.split('')
  let userInput = guess.split('')
  let correctGuess = 0
  let onBoard = 0

  for (let i=0; i<4; i++) {
    if (answer[i]===userInput[i]) {
      correctGuess = correctGuess+1
      answer[i] = null
    } 
  }
  
  for (let i=0; i<4; i++) {
    let targetIndex = answer.indexOf(userInput[i])
    if (targetIndex > -1) {
      onBoard = onBoard +1
      answer[targetIndex] = null
    }
  }

  let correctSpot = correctGuess.toString()
  let onTheBoard = onBoard.toString()
  let hint = `${correctSpot}-${onTheBoard}`
  
  
  board.push(hint)

return hint
}

function mastermind(guess) {
  solution = 'abcd'; // Comment this out to generate a random solution
 
      if (guess === solution){
        console.log("You guessed it")
        
        let winstring = 'You guessed it!'
        return winstring
      }
   
   printBoard()
   generateHint(guess)
}

//create a turn counter
 function turnCounter(guess){
  let userInput = guess
  if (number===10) {
    console.log('The solution was ' + solution)
    let turnsOut = 'You ran out of turns!'
//reset board and turn counter
    number = 0
    board = []    
    return turnsOut} else if (number<10) {
      console.log(
      'Guess again.')
      number++
    }
      console.log('_______________________________________')
      console.log('Turn Number: '+ number)
      console.log('_______________________________________')
      board.push(userInput)
  }



function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    generateHint(guess);
    turnCounter(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
