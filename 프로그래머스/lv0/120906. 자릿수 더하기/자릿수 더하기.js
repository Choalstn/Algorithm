function solution(n) {
     return JSON.stringify(n)
    .split('')
    .reduce((acc, curr) => acc + Number(curr), 0);
}