function solution(s) {
  const ex = {
    '(': ')',
  };

  const stackArr = [];
  const arr = s.split('');

  if (arr[0] === ')') {
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '(') {
      stackArr.push(arr[i]);
    } else {
      const lastEl = stackArr[stackArr.length - 1];

      if (ex[lastEl] !== arr[i]) return false;

      stackArr.pop();
    }
  }

  return stackArr.length ? false : true;
}