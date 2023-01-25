function solution(age) {
  let str = 'abcdefghij';
  return String(age)
    .split('')
    .map((el) => str[el])
    .join('');
}