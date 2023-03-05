function solution(s) {
  let str = s.toUpperCase();

  return str.split('P').length === str.split('Y').length ? true : false;
}

let a = solution('pPoooyY');
console.log(a);