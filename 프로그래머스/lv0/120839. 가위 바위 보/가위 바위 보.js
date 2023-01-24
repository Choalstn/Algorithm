function solution(rsp) {
    // 가위 2 바위 0 보 5
    let arr = [];
    
    for(let i=0; i<rsp.length; i++) {
        if(rsp[i] === "2") arr.push("0")
        if(rsp[i] === "0") arr.push("5")
        if(rsp[i] === "5") arr.push("2")  
    }
    
    return arr.join('')
}