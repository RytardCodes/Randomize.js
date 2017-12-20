# Randomize.js
Randomizes an Array or an Integer, still in progress!

## How to Install:
`npm install randomize.js --save`

### Usage

**randomizeNumber**
```js
const randomize = require('randomize.js'); // Require the Package

var randomNumbers = randomize.randomizeNumbers(10); // Choose a random number from 0 - 10

console.log(randomNumbers); // Log the Chosen Number
```
**Take Note:** If you do placed no integer inside the Function, it'll make it automatically `10`  

  
  
**randomizeArray**
```js
const randomize = require('randomize.js'); // Require the Package

var myArray = ['Hello!', 'Nice to meet you!', 'Welcome!']; // Make an array

var randomArray = randomize.randomizeArray(myArray); // Chooses a random Value from the Array!

console.log(randomArray); // Log the Chosen Value
```
