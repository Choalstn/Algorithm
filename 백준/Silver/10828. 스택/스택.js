const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let stack = [];
let result = [];

for (let i = 1; i <= parseInt(input[0]); i++) {
  const a = input[i].split(" ");

  if (a[0] === "push") {
    stack.push(a[1]);
  } else if (a[0] === "pop") {
    result.push(stack.length > 0 ? stack.pop() : -1);
  } else if (a[0] === "top") {
    result.push(stack.length ? stack[stack.length - 1] : -1);
  } else if (a[0] === "size") {
    result.push(stack.length);
  } else if (a[0] === "empty") {
    result.push(stack.length ? 0 : 1);
  }
}

console.log(result.join("\n"));
