function solution(sides) {
    // 1) 알고 있는 길이 중 한 개가 가장 긴 변일 경우 (a < b , c는 모름)
    //    b < a + c
    //    b - a < c
    
    // 2) 모르는 길이가 가장 긴 변일 경우 
    //    c < a + b
    
    // b - a < c < a + b
    
    let a = Math.min(...sides);
    
    let b = Math.max(...sides);
    
    return (2*a)-1
    
}