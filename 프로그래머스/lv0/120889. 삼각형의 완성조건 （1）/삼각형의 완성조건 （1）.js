function solution(sides) {
    return sides.reduce((acc, curr) => acc + curr) - Math.max(...sides) >
    Math.max(...sides)
    ? 1
    : 2;
}