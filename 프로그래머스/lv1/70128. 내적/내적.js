function solution(a, b) {
    return a.reduce((acc,curr,idx) => acc += curr*b[idx], 0)
}