function solution(s) {
  const arr = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  let value = '';
  let result = '';

  for (let i = 0; i < s.length; i++) {
    if (Number(s[i]) || s[i] === '0') {
      console.log(s[i]);
      result += s[i];
    } else {
      value += s[i];

      if (arr.includes(value)) {
        const idx = arr.indexOf(value);
        result += idx;
        value = '';
      }
    }
  }
  return Number(result);
}