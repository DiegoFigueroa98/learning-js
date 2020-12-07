// Variable: Var vs Let
var helloVar = 'Hello Diego';
let helloLet = 'Hello Diego';

// Show variables 
console.log(helloVar);
console.log(helloLet);
console.log(Window);
console.log(Window.helloVar);
console.log(Window.helloLet);

// Testing a var variable behaviour in a block scope
var music = 'Alternative Pop';
console.log('Music variable before the block: ', music);

// This is a block (not to be confused with empty object literals)
{
  var music = 'Japanese Pop';
  console.log('Music variable inside the block: ', music);
}

// Show variables after a change inside the block
console.log('Music variable after the block: ', music);

// Block scope for the if statement
if (true) {
  var music = 'Rock';
  console.log('Music variable inside the if statement block: ', music);
}

console.log('Music variable after the block: ', music);

// Block scope for the function (here the variable is not reassigned)
function testBlockReach() {
  var music = 'Electronic';
  console.log('Music variable inside the function block: ', music);
}

testBlockReach();
console.log('Music variable after the block: ', music);

// Let usage
let musicLet = 'Metal';
console.log('MusicLet variable before the block: ', musicLet);

{
  let musicLet = 'Heavy Metal';
  console.log('MusicLet variable inside the block: ', musicLet);
}

// The variable musicLet will have the original value
console.log('MusicLet variable after the block: ', musicLet);