function solution(numbers) {
  return 45 - numbers.reduce((acc, curr) => acc + curr);
}