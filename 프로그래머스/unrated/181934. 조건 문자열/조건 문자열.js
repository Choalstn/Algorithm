function solution(ineq, eq, n, m) {
  let result;
  if (ineq === '<') {
    eq === '=' ? (result = n <= m) : (result = n < m);
  } else {
    eq === '=' ? (result = n >= m) : (result = n > m);
  }

  return result ? 1 : 0;
}