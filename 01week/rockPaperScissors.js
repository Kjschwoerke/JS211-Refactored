'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//************************My Code Below*********************************/
//Create a function to validate input for hand 1 then call function to check validity of hand 2
const handOneValid = (h1, h2) => {
  return (h1.match(/^(rock|paper|scissors)$/)) ?  handTwoValid(h1, h2) : "Please type one of the following for Hand 1: Rock, Paper, Scissors."
}

//Create a function to validate input for hand 2 then call function to check victory conditions
const handTwoValid = (h1, h2) => {
  return (h2.match(/^(rock|paper|scissors)$/)) ? victoryConditions(h1, h2) : "Please type one of the following for Hand 2: Rock, Paper, Scissors."
  }

//Create a function to check for victory condtions:
const victoryConditions = (h1, h2) => {
  return (h1===h2) ? "It's a tie!"
  : (h1==="scissors" && h2!=="rock"|| h1==="paper" && h2!=="scissors"|| h1==="rock" && h2!=="paper") ? "Hand one wins!"
  : (h2==="scissors" && h1!=="rock"|| h2==="paper" && h1!=="scissors"|| h2==="rock" && h1!=="paper") ? "Hand two wins!"
  : "Please follow the directions above to continue playing."
}

const rockPaperScissors = (hand1, hand2) => {
  const h1 = hand1.toLowerCase().trim();
  const h2 = hand2.toLowerCase().trim();
  
  return (h1==="" && h2!=="") ? 'Please enter a value for Hand 1.'
  :(h1!=="" && h2==="") ? 'Please enter a value for Hand 2.'
  :(h1==="" && h2==="") ? 'Please enter values for both Hands.'
  :handOneValid(h1, h2)
}
//************************My Code Above*********************************/


function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}
// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}