function solution(name, yearning, photo) {
  const obj = name.reduce((acc, curr, index) => {
    acc[curr] = yearning[index];
    return acc;
  }, {});

  const answer = photo.map((el) =>
    el.reduce((acc, curr) => acc + (obj[curr] ? Number(obj[curr]) : 0), 0)
  );

  return answer;
}