'use strict'

// Function declaration
function myFunction() {
  console.log(
    'Hello, ',
    'How are you?'
  );
}

// Function call
myFunction();

// Function returns a value
function myFunctionReturn() {
  return 'This function returns a string';
}

// Show the returned value
let returnedValue = myFunctionReturn();
console.log(returnedValue);
console.log(myFunctionReturn());

function myFunctionReturnValues() {
  console.log('I almost return a value');
  return 19;
  return 'I never gonna show myself in your program :(';
}

console.log(myFunctionReturnValues());

// Function with parameters
function greet(name, age) {
  console.log(`Hello ${name}, you are ${age} years old, are you?`)
}

greet('Diego', 21);
// Undefined
greet();

function greetDefalut(name = 'Unknown', age = 0) {
  console.log(`Hello ${name}, you are ${age} years old, are you?`)
}

greetDefalut();

// Declared functions

declaredFunction();

function declaredFunction() {
  console.log('This a declared function that can be called at any part of our script, even though before');
}

declaredFunction();

// Anonymous function / Expressed function

// Reference error, can't access to this function before initialization
expressedFunction();

const expressedFunction = function() {
  console.log('This is an anonymous fuction, in other words, a function assigned as value to a variable, if you call this function before its declaration, JS will say: Uncaught ReferenceError: Cannot access expressedFunction before initialization');
}

expressedFunction();