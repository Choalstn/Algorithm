function solution(dot) {
    let result;
    
    if(dot[0] * dot[1] > 0) {
        dot[0] > 0 ? result = 1 : result = 3
    } else {
        dot[0] > 0 ? result = 4 : result = 2
    }
    
    return result;
}