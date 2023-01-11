function solution(n) {
  let result = [1];

  for (let i = 2; i <= n; i++) {
    if (i % 2 !== 0) {
      result.push(i);
    }
  }
  return result
}