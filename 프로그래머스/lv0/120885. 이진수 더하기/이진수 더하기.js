function solution(bin1, bin2) {
  const first = parseInt(bin1, 2);
  const second = parseInt(bin2, 2);
  return (first + second).toString(2);
}