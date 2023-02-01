function solution(array, n) {
  let newArr = array.map((el) => Math.abs(el - n));
  let result = [];

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === Math.min(...newArr)) {
      result.push(array[i]);
    }
  }

  return Math.min(...result);
}