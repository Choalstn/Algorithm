function solution(sizes) {
  const sort = sizes.map((el) => el.sort((a, b) => b - a));

  let width = [];
  let heigth = [];

  for (let i = 0; i < sort.length; i++) {
    width.push(sort[i][0]);
    heigth.push(sort[i][1]);
  }

  return Math.max(...width) * Math.max(...heigth);
}