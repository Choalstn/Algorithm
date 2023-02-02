function solution(s) {
  let obj = {};
  let result = [];

  for (let i = 0; i < s.length; i++) {
    if (!obj.hasOwnProperty(s[i])) {
      obj[s[i]] = 1;
    } else {
      obj[s[i]] += 1;
    }
  }

  for (const [key, value] of Object.entries(obj)) {
    if (value === 1) {
      result.push(key);
    }
  }

  return result.sort().join('');
}