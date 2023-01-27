function solution(order) {
  let arr = String(order).split('');
  return arr.filter((el) => ['3', '6', '9'].includes(el)).length;
}