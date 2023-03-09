function solution(n) {
  let temp = '수박';

  return n % 2 === 0
    ? (temp = temp.repeat(n / 2))
    : (temp = temp
        .repeat(Math.round(n / 2))
        .split('', n)
        .join(''));

  return temp;
}