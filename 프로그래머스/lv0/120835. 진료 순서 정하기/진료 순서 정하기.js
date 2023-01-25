function solution(emergency) {
  let sorted = [...emergency].sort((a, b) => b - a);
  return emergency.map((el) => sorted.findIndex((v) => v === el) + 1);
}