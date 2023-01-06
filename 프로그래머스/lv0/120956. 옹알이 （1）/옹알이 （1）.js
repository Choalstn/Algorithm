function solution(babbling) {
    let counter = 0;
    
    babbling.forEach(element => {
        if (element.split(/aya|ye|woo|ma/g).join('') === '') {
            counter++;
        }
    });
    return counter;
}