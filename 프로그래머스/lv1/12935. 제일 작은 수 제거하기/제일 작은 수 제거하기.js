function solution(arr) {
  let minNum = Math.min(...arr);
  let result = arr.filter((el) => el !== minNum);
    
    return (result.length === 0) ? [-1] : result
}