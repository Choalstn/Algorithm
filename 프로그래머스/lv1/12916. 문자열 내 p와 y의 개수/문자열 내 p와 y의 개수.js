function solution(s) {
  let countP = 0,
    countY = 0;

  for (let i of s) {
    if (i.toUpperCase() === 'Y') {
      countY++;
    } else if (i.toUpperCase() === 'P') {
      countP++;
    }
  }

  return countP === countY ? true : false;
}