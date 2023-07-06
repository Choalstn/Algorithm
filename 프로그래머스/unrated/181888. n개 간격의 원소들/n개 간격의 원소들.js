function solution(num_list, n) {
  return num_list.filter((el, idx) => idx % n === 0);
}