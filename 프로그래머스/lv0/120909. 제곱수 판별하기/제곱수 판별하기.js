function solution(n) {
      let arr = [];

  for (let i = 1; i < n; i++) {
    if (n % i === 0 && i * i === n) {
      arr.push(i);
    }
  }

  if (arr.length > 0) {
    return 1;
  } else {
    return 2;
  }
}