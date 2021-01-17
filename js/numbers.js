let two = 2;
let one = new Number(1);
let sevenDecimal = 7.19;
let stringNumber = '5.6';

console.log(two, one);

// Number of decimals required (roundend)
console.log(sevenDecimal.toFixed(1));
console.log(sevenDecimal.toFixed(5));

// Convertions
console.log(parseInt(sevenDecimal));
console.log(parseFloat(sevenDecimal));

console.log(typeof(stringNumber), typeof(one));
console.log(
  two + one,
  // JavaScript Converts the number to string and makes a concatenation
  sevenDecimal + stringNumber,
  // This give a weird value
  sevenDecimal + parseInt(stringNumber),
  // This is the correct way
  sevenDecimal + parseFloat(stringNumber),
  // You can do this too
  sevenDecimal + Number.parseFloat(stringNumber),
);