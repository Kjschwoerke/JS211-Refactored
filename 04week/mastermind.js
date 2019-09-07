'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

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
  
console.log(answer)
console.log(userInput)
  
    for (let i=0; i<4; i++) {
    if (userInput[i]!==answer[i] && userInput[i]===answer[i-3] || userInput[i]===answer[i-2] || userInput[i]===answer[i-1] || userInput[i]===answer[i+1] || userInput[i]===answer[i+2] || userInput[i]===answer[i+3]){
      onBoard = onBoard + 1
    } 
  }

console.log(correctGuess)
console.log(onBoard)

}

function mastermind(guess) {
  solution = 'abcd'; // Comment this out to generate a random solution
  let answer = solution.split('')
  let userInput = guess.split('')

      if (answer[0]===userInput[0] && answer[1]===userInput[1] && answer[2]===userInput[2] && answer[3]===userInput[3]){console.log("Congrats! You have broken the code!")} else {console.log('The code remains unbroken.')
  } return 'You guessed it!'
}



function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    generateHint(guess);
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
