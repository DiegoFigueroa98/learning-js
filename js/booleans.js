'use strict'
let trueValue = true;
let falseValue = false;
let trueBoolean = Boolean(true);
let falseBoolean = Boolean(false);

console.log(
  trueValue, 
  falseValue,
  trueBoolean,
  falseBoolean,
  typeof(trueValue),
  typeof(falseValue)
);


console.log(
  Boolean(0),
  Boolean(-7),
  Boolean(''),
  Boolean(' '),
  Boolean(),
  Boolean(true),
  Boolean(false),
)

// Just undefined and null gives false in a conditional
falseBoolean = new Boolean(false);
if (falseBoolean) {
  console.log("Hello world");
}
