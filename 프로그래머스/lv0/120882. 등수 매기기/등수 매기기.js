function solution(score) {
  let arr = Array.from({ length: score.length }, () => 1);
  console.log(arr);

  let a = score
    .map((el1) => {
      return el1.reduce((acc, curr) => acc + curr);
    })
    .map((el) => el / 2);

  console.log(a);

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (a[i] < a[j]) arr[i]++;
    }
  }

  return arr;
}