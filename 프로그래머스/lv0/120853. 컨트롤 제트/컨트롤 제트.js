function solution(s) {
  let arr = s.split(' ');
  let result = 0;

  let filter = arr
    .filter((el, idx) => arr[idx + 1] !== 'Z')
    .filter((el) => el !== 'Z');
  console.log(filter);

  for (let i in filter) result += Number(filter[i]);

  return result
}