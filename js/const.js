'use strict'
const PI = 3.1416;
console.log(PI);

// Composites datatypes
// Object
const object = {
    name:  'Diego',
    age: 35
}

// Array
const colors = ['white', 'green', 'blue'];

console.log(object);
console.log(colors);

// Add a new element
object.email = 'diego@gmail.com';
colors.push('orange');

// These datatypes properties can be change during normal execution
console.log(object);
console.log(colors);
