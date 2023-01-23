function solution(cipher, code) {
  let arr = [];
  for (let i = 1; i <= cipher.length; i++) {
    if (i % code === 0) {
      arr.push(cipher[i - 1]);
    }
  }

  return arr.join('');
}