function solution(n) {
  return String(n)
    .split('')
    .reduce((acc, curr) => acc + Number(curr), 0);
}