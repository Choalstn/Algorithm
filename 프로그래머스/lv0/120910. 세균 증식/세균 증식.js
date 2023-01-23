function solution(n, t) {
    //  1시간에 두배 증식 
    // 처음 세균 n 마리 경과한 시간 t 
    // t시간 후 세균의 수 
    // 처음 2마리, 10시간 후는 2048 마리 = 2의 11승
    // 7 14 28 
    return Array(t).fill(n).reduce((acc, curr) => acc * 2, n);
}