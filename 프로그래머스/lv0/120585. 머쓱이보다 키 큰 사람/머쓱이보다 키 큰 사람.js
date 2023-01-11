function solution(array, height) {
    let count = 0;
    
    for(let i=0; i<array.length; i++) {
        if(array[i] > height) {
            count++;
        } else {
            continue;
        }
    }
    return count
}