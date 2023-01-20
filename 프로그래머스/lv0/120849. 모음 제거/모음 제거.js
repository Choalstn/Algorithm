function solution(my_string) {
      let vow = ['a', 'e', 'i', 'o', 'u'];
  let arr = my_string.split(''); // b u s
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    console.log('i : ', arr[i]);
    for (let j = 0; j < vow.length; j++) {
      console.log('j : ', vow[j]);
      if (arr[i] === vow[j]) {
        result.push(arr[i]);
      }
    }
  }

  return arr.filter((el) => !result.includes(el)).join('');
}