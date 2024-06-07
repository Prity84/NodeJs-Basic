//Blocking code

// console.log("start");
// alert("Block");
// console.log("End");

//Non-Blocking code

// console.log("start");
// setTimeout(() => {
//   alert("Non-Blocking code");
// }, 1000);
// console.log("End");

//Without callback

import fs from "fs";

// console.log("start");
// let data = fs.readFileSync("test.txt"); //blocking code
// console.log(data.toString());

// console.log("End");

console.log("start");
fs.readFile("test.txt", "utf-8", (err, res) => {
  //Non-Blocking code
  err ? console.log(err) : console.log(res);
});
console.log("End");
