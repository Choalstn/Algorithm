function solution(n, computers) {
    let answer = 0;
    let visited = [];
    
    for(let i=0; i<computers.length; i++) {
        if(!visited[i]) {
            dfs(i)
            answer++;
        }
    }
    
    function dfs(i) {
        visited[i] = true;
        for(let j=0; j<computers[i].length; j++) {
            if(computers[i][j]===1 && !visited[j]) {
            dfs(j)
            }
        }
    }
    
    return answer;
}