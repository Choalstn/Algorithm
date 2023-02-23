function factorial(num) {
    if(num === 0) {
        return 1
    }
    
    return num * factorial(num-1)
}

function solution(balls, share) {
    // 조합 공식 => n! / (n-r)!r!
    // 재귀 
    let result = factorial(balls) / (factorial((balls-share)) * factorial(share));
    
    return Math.round(result)
}

// function solution(balls, share) {
//     var answer = 0;

//     answer = (factorial(balls)/(factorial(balls-share)*factorial(share)));

//     return Math.round(answer);
// }