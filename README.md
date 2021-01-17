# Today I Learned by [Diego Aaron Figueroa Campos]

JavaScript Course

## Week 1

### Saturday 05, Dec 2020 [Features and Grammar]
It's the only Isomorphic Programming Language, which is able to execute on the 3 layers of an application:

1. **Frontend** (JavaScript)
2. **Backend** (Node.js)
3. **Data persistence** (MongoDB, Couch DB, Firebase, etc)

**Features**
- **High-level** language (Don't worry about resources managment)
- **Interpreted** (Scripts are interpreted in real time)
- **Dynamic** (Compilation time operations can be done in execution time)
- **Weakly typed** (Variable datatype can change in the execution time)
- **Multiparadigm** (Structured, OOP, Functional)
- **Case sensitive** (Count variable is different than count one)
- **No need semicolons** at the end of each line

**Snake Case in**
- Files  
``my_file_javascript.js``

**Upper case**
- Constants 
```js 
const PI = 3.14165926
```

**Upper Camel Case**
- Class
```js
class Car {
  constructor (name, model) {
    this.name = name;
    this.model = model;
  }
}
```

**Lower Camel Case**
- Objects
```js
const anObject = {
  name: ''
}
```

- Primitives
```js
let aString = 'Hello';
let aNumber = 19;
let aBoolean = true;
```

- Functions
```js
function wave(name) {
  alert(`Hello ${name}`);
}

wave('Diego');
```

- Instances
```js
const ajax = new XMLHttpRequest(),
  diego = new humanBeing('Diego', 'Male');
```

**Code ordering**
1. Modules import
2. Variables declaration
3. Functions declaration
4. Code execution

**Datatypes in JavaScript**
1. **Primitives** (Value is directly accessed)
- string
- number
- boolean
- null
- undefined
- NaN

2. **Composites** (The value reference is accessed)
- object = {}
- array = []
- function () { }
- Class {}

### Sunday 06, Dec 2020 [Variables (var vs let)]
**Variables**  
Before 2015, JS has the global scope and the functional one, but it doesn't have a block scope. In a browser environment, the global scope is controlled by the **window**.

**Global scope variable**
```js
var hello = "Hello World"
```

With **ECMAScript 6** we can use the block scope using the **"let"** reserved word 
```js
let hello = "Hello World"
```
Block scopes are different from function scopes in JavaScript.

- **Block scope**
```js
{
  let music = "Alternative Pop"
}
```

- **Function Scope**
```js
function scopeExample() {
  let music = "Japanese Pop"
}
```

Therefore, it's considered bad practice to use the **"var"** reserved word, because it can get you into a value realloaction problem. The **Window** object containts the variables declared with **var**, that is, they will stay in the global scope.

### Monday 07, Dec 2020 [Constants (const)]
**Constants**
A **constant** is a value that cannot be altered by the program during normal execution. It cannot change through re-assignment, and it can't be redeclared .An initializer for a **constant** is required; that is, you must specify its value in the same statement in which it's declared.

```js
// Correct way
const PI = 3.1416;

// Wrong way (Uncaught syntax error)
const NINE;
```
**Composites** datatypes properties can be change during normal execution, but primitives ones can't do it.

If along the flow of an application a varible datatype is going to change, then **"let"** is used, otherwise it is better to use **"const"**.

### Tuesday 08, Dec 2020 [Strings]
An **object** is a data collection that has properties and methods. The **String** object is used to represent and manipulate a sequence of characters. Strings are useful for holding data that can be represented in text form.

Strings can be created as primitives, from string literals, or as objects, using the String() constructor:

### Wednesday 08, Dec 2020 [Template Strings]
Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.

**Concatenation**

```js
let myName = 'Diego';
let lastName = 'Figueroa';
let greeting = 'Hi, my name is ' + myName + ' ' + lastName;
```
**Interpolation**
```js
let greeting = `Hi, my name is ${myName} ${lastName}`;
```

### Thursday 09, Dec 2020 [Numbers]
**Number** is a primitive wrapper object used to represent and manipulate numbers like 37 or -9.25. The **Number** constructor contains constants and methods for working with numbers. Values of other types can be converted to numbers using the **Number()** function.

When used as a function, Number(value) converts a string or other value to the **Number** type. If the value can't be converted, it returns **NaN**.

```js
let one = new Number(1);
```

if you perform an operation of a string with a number, Javascript converts the number to string and makes a concatenation. You need to be carefully with this situation.

```js
let sevenDecimal = 7.19;
let stringNumber = '5.6';

// This will give '7.195.6'
console.log(sevenDecimal + stringNumber);
```

JavaScript has some issues in numbers operations, so it is recommended to use libraries when you are going to make more exact calculations.

### Friday 10, Dec 2020 [Booleans]
**Boolean object**
The value passed as the first parameter is converted to a boolean value, if necessary. If the value is omitted or is 0, -0, null, false, NaN, undefined, or the empty string (""), the object has an initial value of false. All other values, including any object, an empty array ([]), or the string "false", create an object with an initial value of true.

Do not confuse the **primitive** **Boolean** values true and false with the true and false values of the **Boolean** object.

Any object of which the value is not undefined or null, including a **Boolean** object whose value is false, evaluates to true when passed to a conditional statement. For example, the condition in the following if statement evaluates to true:

```js
let falseBoolean = new Boolean(false);
if (falseBooelan) {
  // This code is executed
}
```

This behavior does not apply to Boolean primitives. For example, the condition in the following if statement evaluates to false:

```js
let falseBoolean = false;
if (falseBoolean) {
  // this code is not executed
}
```
Do not use a Boolean object to convert a non-boolean value to a boolean value. To perform this task, instead, use Boolean as a function, or a double NOT operator:

```js
let foo = Boolean(expression);     // use this...
let faa = !!(expression);          // ...or this
let fuu = new Boolean(expression); // don't use this!
```

If you specify any object, including a Boolean object whose value is false, as the initial value of a Boolean object, the new Boolean object has a value of true.

```js
let myFalse = new Boolean(false);   // initial value of false
let falseBoolean = Boolean(myFalse);       // initial value of true
let myString = new String('Hello'); // string object
let stringBoolean = Boolean(myString);      // initial value of true
```

**Truthy**
In JavaScript, a **truthy** value is a value that is considered true when encountered in a Boolean context. All values are **truthy** unless they are defined as falsy (i.e., except for false, 0, -0, 0n, "", null, undefined, and NaN).

Examples of truthy values in JavaScript (which will be coerced to true in boolean contexts, and thus execute the if block):
```js
if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
```

**Falsy**
A falsy value is a value that is considered false when encountered in a Boolean context.

Examples of falsy values in JavaScript (which are coerced to false in Boolean contexts, and thus bypass the if block):

```js
if (false)
if (null)
if (undefined)
if (0)
if (-0)
if (0n)
if (NaN)
if ("")
```

If the first object is falsy, it returns that object

```js
false && "dog"
// ↪ false

0 && "dog"
// ↪ 0
```

### Saturday 11, Dec 2020 [Primitives]
**Null and Undefinied**
Both ot them represent a variable that has not a value.

**Undefinied** indicates that a variable has not been initialized and that the value is absent

**Null** is a special value that represent the value absent.

**NaN (not a number)**
The global NaN property is a value representing Not-A-Number.

```js
let myUndefinied;
console.log(myUndefinied);

let myNull = null;
console.log(myNull);

let notNumber = 18.1 * 'hola';
console.log(notNumber);
```
