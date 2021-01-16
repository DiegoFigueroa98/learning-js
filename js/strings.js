'use strict'
let myName = 'Diego';
let lastName = 'Figueroa';
let greeting = new String('Hello');

console.log(myName,lastName,greeting);

// Show the string lenghts
console.log(
    myName.length,
    lastName.length,
    greeting.length
);

// Change string capitalization
console.log(
    myName.toLowerCase(),
    lastName.toUpperCase()
);

let lorem = '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, repellendus.'   ;

// Show some string methods
console.log(
    lorem.includes('amet'),
    lorem.includes('diego'),
    lorem,
    lorem.trim(),
    lorem.split(' '),
    lorem.trim().split(' '),
    lorem.trim().split(',')
);

