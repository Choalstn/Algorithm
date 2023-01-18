function solution(slice, n) {
    // n은 피자를 먹는 사람의 수 slice 피자 조각 수
    // 최소 한 조각 이상 
    let pizza;
    
    if(n % slice === 0) {
        pizza = n / slice
    } else if( n% slice !== 0) {
        pizza = Math.ceil(n/slice)
    }
    
    return pizza;
}