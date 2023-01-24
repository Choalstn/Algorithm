function solution(my_string) {
  return my_string
    .split('')
    .map((el) =>
      el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()
    )
    .join('');
}