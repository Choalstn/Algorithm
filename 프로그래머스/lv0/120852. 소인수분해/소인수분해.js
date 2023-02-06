function solution(n) {
    let arr = [];
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
        while (n % i === 0) {
            n /= i;
            arr.push(i);
        }
    }
    
    if (n >= 2) {
        arr.push(n);
    }
    
    let result = Array.from(new Set(arr));
    return result.sort((a,b) => a-b)
}