function solution(my_string) {
    return [...my_string]
    .filter((el) => Number(el) || el === '0')
    .sort((a, b) => a - b)
    .map((el) => Number(el));
}