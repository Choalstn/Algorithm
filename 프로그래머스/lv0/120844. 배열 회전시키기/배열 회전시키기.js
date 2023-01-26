function solution(numbers, direction) {
    if(direction === 'right') {
        const last = numbers[numbers.length-1];
        numbers.pop(last)
        numbers.unshift(last)
    } else {
        const first = numbers[0];
        numbers.shift();
        numbers.push(first)
    }
    return numbers
}