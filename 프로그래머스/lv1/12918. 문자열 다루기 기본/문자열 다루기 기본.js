function solution(s) {
    let arr;
  let result = false;

  arr = s.split('').map((el) => Number(el));

  if (s.length === 4 || s.length === 6) {
    if (arr.includes(NaN)) {
      result = false;
    } else {
      result = true;
    }
  }

  return result;
}