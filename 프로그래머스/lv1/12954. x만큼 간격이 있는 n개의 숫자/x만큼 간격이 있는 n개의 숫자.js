function solution(x, n) {
  let arr = Array(n).fill(x);

  return arr.map((el, idx) => {
    return el + el * idx;
  });
}