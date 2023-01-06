function solution(denum1, num1, denum2, num2) {
    var answer = [];
    
    const a = (denum1 * num2) + (denum2 * num1)
    const b = num1 * num2
    
    function gcd(a,b) {
        if(a%b === 0) {
            return b
        } else {
            return gcd(b, (a%b))
        }
    }
    
    let min = gcd(a,b);
    
    answer.push(a/min);
    answer.push(b/min);
    
    return answer;
}