'use strict'
const diego = {
  myName: 'Diego',
  lastName: 'Figueroa',
  age: '22',
  hobbies: ['Tennis', 'Swimming'],
  single: false,
  contact: {
    email: '16460315@colima.tecnm.mx',
    linkedin: 'diegoaaron98',
    cel: '3121234561'
  },
  greet: function() {
    console.log('Hello');
  },
  sayMyName: function() {
    console.log(`Hello my name is ${this.myName} ${this.lastName} and I'm ${this.age} years old. You can contact me in ${this.contact.email}`);
  }
};

console.log(diego);

// Acces to object items
// Variables inside an object are called properties
// Functions inside an object are called methods
console.log(
  diego.myName,
  diego.lastName,
  diego.age,
  diego.hobbies,
  diego.hobbies[0],
  diego.hobbies[1],
  diego.single,
  diego.contact,
  diego.contact.email,
  diego.contact.linkedin,
  diego.contact.cel,
);

// If you put this inside the console log is gonna cause bugs
diego.greet();
diego.sayMyName();

// Object methods
console.log(Object.keys(diego));
console.log(Object.values(diego));

console.log(diego.hasOwnProperty('myName'));
console.log(diego.hasOwnProperty('myBirthday'));