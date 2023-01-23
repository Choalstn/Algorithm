function solution(my_string) {
     return my_string
    .split('')
    .filter((el) => Number(el))
    .map((el) => Number(el))
    .reduce((acc, curr) => acc + curr);
}