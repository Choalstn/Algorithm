const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((el) => Number(el));

const N = input.shift();
let stack = [];
let result = "";
let j = 1;

for (let i = 0; i < N; i++) {
  while (j <= input[i]) {
    stack.push(j);
    result += "+ ";
    j++;
  }

  let num = stack.pop();
  if (num !== input[i]) {
    result = "NO";
    break;
  }
  result += "- ";
}
console.log(result.split(" ").join("\n"));

