function solution(n) {
  let result = '';
  let a = String(n)
    .split('')
    .sort((a, b) => b - a)
    .map((el) => (result += el));

  return Number(a[a.length - 1]);
}