const data = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(data[0]);
const m = parseInt(data[1]);

const result = [];

const graph = Array(n + 1).fill()
    .map(()=> new Array().fill());

// 인접리스트로 구현
for(let i = 0; i < m; i++){
    let [a, b] = data[i + 2].split(' ').map(x=>parseInt(x));
    graph[a].push(b);
    graph[b].push(a);
}


function BFS(now, depth){
    let len = graph[now].length

    if(depth == 2){
        return;
    }

    for(let i = 0; i < len; i++){
        if(!result.includes(graph[now][i]) && graph[now][i] !== 1){
            result.push(graph[now][i]);
        }
        BFS(graph[now][i], depth + 1);
    }
}

BFS(1, 0);


console.log(result.length);