function solution(my_string) {
  let arr = my_string.split('');
  let result = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result.join('');
}