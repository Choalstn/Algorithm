function solution(numbers) {
  // 배열 역순으로 정렬 후 0,1 번 곱한 값 출력
  numbers.sort((a, b) => b - a);

  return numbers[0] * numbers[1];
}