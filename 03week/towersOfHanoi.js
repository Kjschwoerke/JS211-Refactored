'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}


function movePiece(startStack, endStack) {
//move items from array a to either array b or array c
  if (startStack==='a' && endStack==='b'){
    let from = stacks['a'].pop();
    stacks['b'].push(from);
  }
  else if (startStack==='a' && endStack==='c'){
    let from = stacks['a'].pop();
    stacks['c'].push(from);
  }
//move items from array b to either array a or array c
  else if (startStack==='b' && endStack==='a'){
  let from = stacks['b'].pop();
  stacks['a'].push(from);
  }
  else if (startStack==='b' && endStack==='c'){
    let from = stacks['b'].pop();
    stacks['c'].push(from);
  }
//move items from array c to either array a or array b
  else if (startStack==='c' && endStack==='a'){
    let from = stacks['c'].pop();
    stacks['a'].push(from);
  }
  else if (startStack==='c' && endStack==='b'){
    let from = stacks['c'].pop();
    stacks['b'].push(from);
  }
}

function isLegal(startStack, endStack) {
//check if move legal when startStack is 'a'
  if (startStack === 'a' && endStack === 'b'){
    for(let i = 0; i<stacks.b.length; i++) {
      if(stacks.b[i]<stacks.b[i+1]){
        console.log('Error - Invalid move')
        let errorValue = stacks.b.pop()
        stacks.a.push(errorValue)
        return true
      } else {return false}
    } return true
  }

  if (startStack === 'a' && endStack === 'c'){
    for(let i = 0; i<stacks.c.length; i++) {
      if(stacks.c[i]<stacks.c[i+1]){
        console.log('Error - Invalid move')
        let errorValue = stacks.c.pop()
        stacks.a.push(errorValue)
        return true
      } else {return false}
    } return true
  }
//check if move legal when startStack is 'b'
if (startStack === 'b' && endStack === 'a'){
  for(let i = 0; i<stacks.a.length; i++) {
    if(stacks.a[i]<stacks.a[i+1]){
      console.log('Error - Invalid move')
      let errorValue = stacks.a.pop()
      stacks.b.push(errorValue)
      return true
    } else {return false}
  } return true
}

if (startStack === 'b' && endStack === 'c'){
  for(let i = 0; i<stacks.c.length; i++) {
    if(stacks.c[i]<stacks.c[i+1]){
      console.log('Error - Invalid move')
      let errorValue = stacks.c.pop()
      stacks.b.push(errorValue)
      return true
    } else {return false}
  } return true
}

//check if move legal when startStack is 'c'
if (startStack === 'c' && endStack === 'a'){
  for(let i = 0; i<stacks.a.length; i++) {
    if(stacks.a[i]<stacks.a[i+1]){
      console.log('Error - Invalid move')
      let errorValue = stacks.a.pop()
      stacks.c.push(errorValue)
      return true
    } else {return false}
  } return true
}

if (startStack === 'c' && endStack === 'b'){
  for(let i = 0; i<stacks.b.length; i++) {
    if(stacks.b[i]<stacks.b[i+1]){
      console.log('Error - Invalid move')
      let errorValue = stacks.b.pop()
      stacks.c.push(errorValue)
      return true
    } else {return false}
  } return true
}

}

function checkForWin() {
     if (stacks.c[0]>stacks.c[1] && stacks.c[1]>stacks.c[2] && stacks.c[2]>stacks.c[3] && stacks.c.length === 4){
       console.log("You win! Congrats!");
       return true
     }
     if (stacks.b[0]>stacks.b[1] && stacks.b[1]>stacks.b[2] && stacks.b[2]>stacks.b[3] && stacks.b.length === 4){
      console.log("You win! Congrats!");
      return true
    }
    return false
   }
 



function towersOfHanoi(startStack, endStack) {
  if (startStack==="" || endStack===""){console.log("Please Enter a value for the Start and End Stacks")} else {movePiece(startStack, endStack); isLegal(startStack, endStack); checkForWin()}
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
