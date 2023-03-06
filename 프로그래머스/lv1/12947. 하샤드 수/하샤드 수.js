function solution(x) {
  let a = String(x)
    .split('')
    .reduce((acc, curr) => acc + +curr, 0);

  return x % a === 0 ? true : false;
}
