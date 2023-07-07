function solution(arr1, arr2) {
    const answer = arr1.map((rows,rowIdx)=>rows.map((num,colIdx)=>num+arr2[rowIdx][colIdx]))
    return answer;
}