const data = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [row, col] = data[0].split(' ').map(x=>parseInt(x));

const matrix = Array.from( {length : row} );

for(let i = 1; i < row + 1; i++){
    matrix[i-1] = data[i].split('');
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const visited = Array.from( { length: row }, ()=> Array(col).fill(false));

function DFS (startr, startc){
    const stack = [[startr, startc]];
    let sheeps = 0;
    let wolves = 0;

    while(stack.length){
        let [r, c] = stack.pop();
        visited[r][c] = true;

        if(matrix[r][c] == 'o'){
            sheeps ++;
        } else if(matrix[r][c] == 'v'){
            wolves ++;
        } 

        for(let i = 0; i < 4; i++){
            if(0 <= r + dy[i] && r + dy[i] < row && 0 <= c + dx[i] && c + dx[i] < col){
                if(!visited[r + dy[i]][c + dx[i]] && matrix[r + dy[i]][c + dx[i]] !== '#'){
                    stack.push([r + dy[i], c + dx[i]]);
                    visited[r + dy[i]][c + dx[i]] = true;
                }
            }
        }
    }
    if(sheeps == 0 && wolves == 0){
        return false;
    }
    else if (sheeps > wolves){
        return [sheeps, 0];
    } else{
        return [0, wolves];
    }
}

let finalSheeps = 0;
let finalWolves = 0;

for(let i = 0; i < row; i++){
    for(let j = 0; j < col; j++){
        if(matrix[i][j] !== '#' && !visited[i][j]){
            let temp = DFS(i, j);
            if(temp){
                finalSheeps += temp[0];
                finalWolves += temp[1];
            }
        }
    }
}

console.log(finalSheeps, finalWolves);