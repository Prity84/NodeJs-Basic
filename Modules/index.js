// Modules
// It passes  code to one file into another files. We reuse code with this we do not
// need to write code again and again.

// This will allow us to use that function from
// that index.js file and we can use it right here.
const greet = require("./greet");

// const person1 = require("./people");
// console.log(person1);

// const person2 = require("./people");
// console.log(person2);

const { person1, person2, person3 } = require("./people");

console.log(person1);
console.log(person2);
console.log(person3);

greet(person1);
greet(person2);
greet(person3);

greet("Prity");
// greet("Suhani");
