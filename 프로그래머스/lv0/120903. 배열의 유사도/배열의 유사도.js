function solution(s1, s2) {
    let arr = [];
  for (let i of s1) {
    for (let j of s2) {
      if (i === j) arr.push(i);
    }
  }
  return arr.length;
}