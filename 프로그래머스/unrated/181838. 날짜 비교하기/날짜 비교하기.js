function solution(date1, date2) {
  let result = 0;
  if (date1[0] === date2[0]) {
    if (date1[1] === date2[1]) {
      if (date1[2] === date2[2]) {
        result = 0;
      } else if (date1[2] < date2[2]) {
        result = 1;
      }
    } else if (date1[1] < date2[1]) {
      result = 1;
    }
  } else if (date1[0] < date2[0]) {
    result = 1;
  }

  return result;
}