const data = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [m, n] = data[0].split(' ').map(x=>parseInt(x));

const matrix = Array.from({ length : m }, () => Array(n).fill());

for(let i = 1; i < m + 1; i++){
    matrix[i - 1] = data[i].split('').map(x=>parseInt(x));
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, 1, -1];

function DFS(row, col, visited, stack){
    stack.push([row, col]);

    while(stack.length){
        let [row, col] = stack.pop();
        visited[row][col] = true;

        if(row == m - 1){
            return 1; 
        }

        for(let i = 0; i < 4; i++){
            if(0 <= row + dy[i] && row + dy[i] < m && 0 <= col + dx[i] && col + dx[i]< n){
                if(!visited[row + dy[i]][col + dx[i]]
                    && matrix[row + dy[i]][col + dx[i]] === 0){
                    stack.push([row + dy[i], col + dx[i]]);
                }
            }
        }
    }
    return 0;
}

let flag = 0;
const visited = Array.from({ length : m }, () => Array(n).fill(false));

for(let i = 0; i < n; i++){
    if(matrix[0][i] === 0 && !visited[0][i]){
        if(DFS(0, i, visited, [])){
            flag = 1;
            break;
        }
    }
}

console.log(flag ? 'YES' : 'NO');