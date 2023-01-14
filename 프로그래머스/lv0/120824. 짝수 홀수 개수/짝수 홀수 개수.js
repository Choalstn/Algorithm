function solution(num_list) {
  let newArr = [];

  let even = num_list.filter((el) => el % 2 === 0);
  let odd = num_list.filter((el) => el % 2 !== 0);

  newArr.push(even.length, odd.length);
    
    return newArr;
}