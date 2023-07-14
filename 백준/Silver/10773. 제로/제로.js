const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let stack = [];

for (let i = 1; i <= parseInt(input[0]); i++) {
  input[i] === "0" ? stack.pop() : stack.push(Number(input[i]));
}

console.log(stack.reduce((acc, curr) => acc + curr, 0));
