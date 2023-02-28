function solution(my_string) {
  let split = my_string.split(' ');

  let result = Number(split[0]);

  for (let i = 1; i < split.length; i += 2) {
    if (split[i] === '+') {
      result += Number(split[i + 1]);
    } else {
      result -= Number(split[i + 1]);
    }
  }

  return result
}