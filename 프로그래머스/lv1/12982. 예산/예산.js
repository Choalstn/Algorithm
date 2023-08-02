function solution(d, budget) {
  const sort = d.sort((a, b) => a - b);
  let result = [];
  let num = 0;

  for (let i = 0; i < d.length; i++) {
    num += sort[i];

    if (num <= budget) {
      result.push(sort[i]);
    }
  }

  return result.length;
}