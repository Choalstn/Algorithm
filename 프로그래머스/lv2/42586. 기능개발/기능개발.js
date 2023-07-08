function solution(progresses, speeds) {
  let result = [];

  const days = progresses.map((el, idx) => Math.ceil((100 - el) / speeds[idx]));

  while (days.length > 0) {
    let last = days.findIndex((el) => days[0] < el);

    if (last === -1) {
      result.push(days.length);
      days.splice(0, days.length);
    } else {
      result.push(last);
      days.splice(0, last);
    }
  }

  return result;
}