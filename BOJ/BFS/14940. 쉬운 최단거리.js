const data = require('fs').readFileSync('example.txt').toString().split('\n');
const [n, m] = data[0].split(' ').map(x=>parseInt(x));
const resultMap = Array.from({length: n}, ()=>Array(m).fill(0));

let [startr, startc] = [0, 0];
const matrix = Array.from({length: n}, ()=>[]);

for(let i = 1; i <= n; i++){
    matrix[i - 1] = data[i].split(' ').map(x=>parseInt(x));
}

for(let i = 0; i < n; i++){
    for(let j = 0; j < m; j++){
        if(matrix[i][j] == 2){
            startr = i;
            startc = j;
        }
    }
}

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

function BFS(startr, startc, resultMap){
    const queue = [[startr, startc, 0]];
    const visited = Array.from({length: n}, ()=>Array(m).fill(0));


    while(queue.length){
        let [r, c, cnt] = queue.shift();
        resultMap[r][c] = cnt;

        for(let i = 0; i < 4; i++){
            if(0 <= r + dy[i] && r + dy[i] < n && 0 <= c + dx[i] && c + dx[i] < m
                && !visited[r + dy[i]][c + dx[i]]
                && matrix[r + dy[i]][c + dx[i]] == 1
            ){
                queue.push([r + dy[i], c + dx[i], cnt + 1]);
                visited[r + dy[i]][c + dx[i]] = true;
            }
        }
    }
    return resultMap;
}

result = BFS(startr, startc, resultMap);

// 도달할 수 없는 거 처리
for(let i = 0; i < n; i++){
    for(let j = 0; j < m; j++){
        if(!matrix[i][j] == 0 && result[i][j] == 0){
            result[i][j] = -1;
        }
    }
}

result[startr][startc] = 0;

for(let i = 0; i < n; i++){
    console.log(result[i].join(' '));
}