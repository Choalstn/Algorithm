function solution(t, p) {
  let arr = [];
  for (let i = 0; i < t.length; i++) {
    arr.push(t.slice(i, i + p.length));
  }

  return arr
    .filter((el) => el.length >= p.length)
    .map((el) => +el)
    .filter((el) => el <= +p).length;
}