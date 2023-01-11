function solution(array) {
    let objCount = array.reduce((result, curr, idx) => {
        result[curr] = (result[curr] || 0) + 1
        return result
    }, {})
    let sortedKeys = Object.keys(objCount).sort((a, b) => objCount[b] - objCount[a])
    
    if (objCount[sortedKeys[0]] === objCount[sortedKeys[1]]) return -1
    else return Number(sortedKeys[0])
}