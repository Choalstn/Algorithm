function solution(t, p) {
  let count = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    console.log(i);
    const value = t.slice(i, i + p.length);
    console.log(value);
    value <= +p && count++;
  }

  return count;
}