function solution(n) {
    if (n === 0) {
    return 0;
  }
    
  return Array(n + 1)
    .fill()
    .map((el, idx) => idx)
    .filter((el) => n % el === 0)
    .reduce((acc, curr) => acc + curr);
}