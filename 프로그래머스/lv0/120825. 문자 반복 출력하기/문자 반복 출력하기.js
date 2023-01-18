function solution(my_string, n) {
    let newArr = [];
  newArr.push(...my_string);
  console.log(newArr);

  return newArr.map((el) => el.repeat(n)).join('')
}