function solution(s) {
    const frontCheck = {}

    return s.split('').map((str,idx)=>{
        if(frontCheck[str] !== undefined){

            const frontDistance = idx - frontCheck[str]
            frontCheck[str] = idx
            return frontDistance
        }
        else{
    
            frontCheck[str] = idx
            return -1
        }
    })
}