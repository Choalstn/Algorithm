function solution(numbers) {
  var answer = 0;

  for (element of numbers) {
    answer += element;
  }
  answer /= numbers.length;
  return answer;
}