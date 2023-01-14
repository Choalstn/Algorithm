function solution(n, k) {
    // 양꼬치 n 음료 k 
    // n=10마다 음료수 1개 서비스
    // n=10 이면 서비스는 (n/10)
    // 총 가격은 n + k - (n/10)
    return n * 12000 + k * 2000 - Math.floor(n / 10) * 2000;
}