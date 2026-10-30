// Exercise 1: Formatting and Naming

let thisIsANewVariable = 10;

if (thisIsANewVariable === 10) {
    console.log(thisIsANewVariable);
}


// Exercise 2: Defining Core Data Types

let greetingMessage = `Hello, JavaScript!`;
let decimalNumber = 10.5;
let isReady = true;

console.log(greetingMessage);
console.log(decimalNumber);
console.log(isReady);


// Exercise 3: Single-Line Comments

// Stores the user's current score.
let currentScore = 95;
console.log(currentScore);


// Exercise 4: Equality Comparison

console.log('100' == 100);
console.log('100' === 100);


// Exercise 5: Ternary Operator

let isWeekend = false;
let schedule = isWeekend ? "Day off" : "Work day";

console.log(schedule);


// Exercise 6: If/Else Structure

let userAge = 16;

if (userAge >= 18) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}


// Exercise 7: Logical AND Operator

let hasPermission = true;
let itemCount = 3;

if (hasPermission && itemCount < 5) {
    console.log("Ready to process");
}


// Exercise 8: For Loop

for (let i = 1; i <= 5; i++) {
    console.log(i);
}


// Exercise 9: Loop Control

for (let i = 0; i < 10; i++) {
    if (i === 7) {
        break;
    }

    console.log(i);
}


// Exercise 10: Ensuring Execution

let counter = 10;

do {
    console.log("Running once");
} while (counter < 10);


// Exercise 11: Function Definition

function calculateArea(width, height) {
    return width * height;
}

const resultArea = calculateArea(5, 10);

console.log(resultArea);


// Exercise 12: Array Manipulation

const fruitList = ['Apple', 'Banana'];

fruitList.push('Grape');
fruitList.shift();

console.log(fruitList);
console.log(fruitList.indexOf('Banana'));


// Exercise 13: Array Copying

const originalData = [1, 2, 3, 4];
const clonedData = originalData.slice();

console.log(originalData);
console.log(clonedData);

// slice() creates a shallow copy. Nested objects or arrays are still
// shared between the original array and the copied array.


// Exercise 14: Object Constructor

function Animal(species, sound) {
    this.species = species;
    this.sound = sound;
}


// Exercise 15: Object Instantiation

const dog = new Animal("Canine", "Woof");
const cat = new Animal("Feline", "Meow");

const animalArray = [dog, cat];

console.log(animalArray);