const data = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [n, m, k, x] = data[0].split(' ').map(x=>parseInt(x));

// 인접 리스트
const adjarr = Array.from({ length: n + 1 }, () => []);
const visited = Array(n + 1).fill(false);

for(let i = 1; i < m + 1; i++){
    let [a, b] = data[i].split(' ').map(x=>parseInt(x));
    adjarr[a].push(b);
}

function BFS(visited, result){
    const queue = [];
    queue.push(x);
    visited[x] = 0;

    while(queue.length){
        let start = queue.shift();

        for(const next of adjarr[start]){
            if(visited[next] === false){
                visited[next] = visited[start] + 1;
                queue.push(next);
            }
        }
    }

    for(let i = 1; i <= n; i++){
        if(visited[i] === k) result.push(i);
    }
    return result.sort((a, b)=> a - b);
}

const answer = BFS(visited, [])

if(answer.length){
    console.log(answer.join('\n'));
} else{
    console.log(-1);
}
