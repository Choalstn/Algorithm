function solution(number) {
  let all = [];
  let result = [];

  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      for (let z = j + 1; z < number.length; z++) {
        all.push([number[i], number[j], number[z]]);
        if (all[all.length - 1].reduce((acc, crr) => acc + crr) === 0) {
          result.push(all[all.length - 1]);
        }
      }
    }
  }

  return result.length;
}