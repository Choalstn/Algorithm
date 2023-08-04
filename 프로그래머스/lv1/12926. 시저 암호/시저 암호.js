function solution(s, n) {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      result += ' ';
    } else {
      const text = upper.includes(s[i]) ? upper : lower;

      let idx = text.indexOf(s[i]) + n;

      if (idx >= text.length) idx -= text.length;
      result += text[idx];
    }
  }

  return result;
}