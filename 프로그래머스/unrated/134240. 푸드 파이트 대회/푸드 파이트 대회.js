function solution(food) {
  let arr = [];
  let str = '';
  let reverseStr = '0';

  for (let i = 1; i < food.length; i++) {
    if (food[i] % 2 !== 0) {
      arr.push((food[i] - (food[i] % 2)) / 2);
    } else {
      arr.push(food[i] / 2);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    str += String(i + 1).repeat(arr[i]);
  }

  reverseStr += str.split('').reverse().join('');

  return str + reverseStr;
}