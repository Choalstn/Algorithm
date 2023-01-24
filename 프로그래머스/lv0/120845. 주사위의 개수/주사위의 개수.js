function solution(box, n) {
    return box.map(el => Math.floor(el/n)).reduce((acc,curr) => acc*curr)
}