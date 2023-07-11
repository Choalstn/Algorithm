function solution(s) {
  const words = s.split('');
  console.log(words);
  let nextUpper = true;
  const converted = words.map((c) => {
    if (c == ' ') {
      nextUpper = true;
      return c;
    } else if (nextUpper) {
      nextUpper = false;
      return c.toUpperCase();
    } else {
      return c.toLowerCase();
    }
  });
  return converted.join('');
}