function solution(num, k) {
  let result = -1;
  let arr = String(num).split('');

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === String(k)) return result = i+1;
  }
  return result;
}