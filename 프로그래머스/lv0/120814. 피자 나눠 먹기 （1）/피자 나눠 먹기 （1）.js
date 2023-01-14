function solution(n) {
    // n = 피자 나눠먹을 사람의 수
    // 한 판에 7조각
    // 8명이면 2판, 13명이면 2판, 16명이면 3판
    return Math.ceil(n/7)
}