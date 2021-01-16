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

### Tuesday 16, Jan 2020 [Strings]
An **object** is a data collection that has properties and methods. The **String** object is used to represent and manipulate a sequence of characters. Strings are useful for holding data that can be represented in text form.

Strings can be created as primitives, from string literals, or as objects, using the String() constructor: