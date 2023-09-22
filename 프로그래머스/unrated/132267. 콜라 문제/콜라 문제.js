function solution(a, b, n) {
  // a 마트에 줘야하는 병
  // b 받는 병 수
  // c 갖고 있는 병 수

  const gettingBottles = (leftBottles, count, a, b) => {
    if (leftBottles / a < 1) {
      return count;
    }

    const newBottles = Math.floor(leftBottles / a) * b;
    const left = leftBottles % a;

    return gettingBottles(newBottles + left, count + newBottles, a, b);
  };

  let answer = gettingBottles(n, 0, a, b);

  return answer;
}