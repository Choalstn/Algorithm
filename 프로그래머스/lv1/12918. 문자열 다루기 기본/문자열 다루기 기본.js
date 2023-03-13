function solution(s) {
  let arr;
  let result = false;

  arr = s.split('').map((el) => Number(el));

  s.length === 4 || s.length === 6
    ? arr.includes(NaN)
      ? (result = false)
      : (result = true)
    : (result = false);

  return result;
}