function solution(my_string, num1, num2) {
    let arr = my_string.split("");
    
    const str1 = arr[num1];
    const str2 = arr[num2];
    
    arr[num1] = str2;
    arr[num2] = str1;
    
    return arr.join('')
    
}