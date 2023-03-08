function solution(arr, divisor) {
    let newArr = arr.filter((el) => el % divisor === 0)
    
    return (newArr.length>0) ? newArr.sort((a,b) => a-b) : [-1]
}