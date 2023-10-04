function solution(k, score) {
  let arr = [];

  return score.map((el, idx) => {
    arr.push(el);
    arr.sort((a, b) => a - b);

    if (arr.length === k + 1) {
      arr.shift();
    }

    return arr[0];
  });
}