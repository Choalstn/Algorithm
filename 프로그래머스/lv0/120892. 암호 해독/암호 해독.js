function solution(cipher, code) {
  return cipher
    .split('')
    .filter((el, idx) => {
      return idx % code === code-1;
    })
    .join('');
}