function solution(n) {
    let a = [];
    let b = []
    
    for(let i=1; i<=n; i++) {
        for(let j=1; j<=i; j++) {
            if(i%j === 0) a.push(j)
        }
        
        if(a.length >= 3)  b.push(i)
        
        a=[]
    }
    
    return b.length
}