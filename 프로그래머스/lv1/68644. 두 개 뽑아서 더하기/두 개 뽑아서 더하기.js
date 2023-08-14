function solution(numbers) {
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i === j) continue;

      result.push(numbers[i] + numbers[j]);
    }
  }

  return [...new Set(result.sort((a, b) => a - b))];
}