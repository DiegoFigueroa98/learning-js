const emptyArray = [];
console.log(emptyArray);

const myArray = [1, true, 'Hi', ['A', 'B', 'C', ['1','2']]]
console.log(myArray);
console.log(myArray.length);

// Access a specific item
console.log(
  myArray[0],
  myArray[1],
  myArray[2],
  myArray[3],
  myArray[3][0],
  myArray[3][1],
  myArray[3][2],
  myArray[3][3][0],
  myArray[3][3][1],
  // This will be undefined
  myArray[4]
);

// Array object
const otherArray = Array.of('X', 'Y', 'Z', '7', '8', '9');
console.log(otherArray);

const cart = Array(100).fill(false);
console.log(cart);

const colors = ['red', 'green', 'blue'];
console.log(colors);
// Add an item
colors.push('black');
console.log(colors);
// Delete the last item
colors.pop();
console.log(colors);
// For each
colors.forEach(function(element, index) {
  console.log(`<li id="${index}">${element}</li>`)
})