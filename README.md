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


