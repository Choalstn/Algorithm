function solution(i, j, k) {
  return Array(j - i + 1)
    .fill()
    .map((el, idx) => String(idx + i))
    .join('')
    .split('')
    .filter((el) => el.includes(k)).length;
}