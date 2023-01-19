function solution(n) {
    return JSON.stringify(n)
    .split('')
    .map((el) => parseInt(el))
    .reduce((acc, curr) => acc + curr);
}