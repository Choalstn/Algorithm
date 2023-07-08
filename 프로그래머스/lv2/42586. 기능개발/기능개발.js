function solution(progresses, speeds) {
  let deday = [];
  let result = [];

  const minus = progresses.map((el) => 100 - el);
  console.log(minus); //[ 7, 70, 45 ]

  for (let i = 0; i < speeds.length; i++) {
    deday.push(Math.ceil(minus[i] / speeds[i]));
  }

  console.log(deday);

  while (deday.length > 0) {
    let last = deday.findIndex((el) => deday[0] < el);

    if (last === -1) {
      result.push(deday.length);
      deday.splice(0, deday.length);
    } else {
      result.push(last);
      deday.splice(0, last);
    }
  }

  return result;
}