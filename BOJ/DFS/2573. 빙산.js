const data = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [row, col] = data[0].split(' ').map(x=>parseInt(x));
const matrix = Array.from( {length : row});


for(let i = 1; i < row + 1; i++){
    matrix[i - 1] = data[i].split(' ').map(x=>parseInt(x));
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function afterYear(r, c, iceberg){
    let sea = 0;
    for(let i = 0; i < 4; i++){
        if(iceberg[r + dy[i]][c + dx[i]] === 0){
            sea ++;
        }
    }
    return sea;
}

// DFS
function countChunk(matrix) {
    let chunk = 0;
    let stack = [];
    let visited = Array.from( {length : row }, () => Array(col).fill(false)); 

    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(matrix[i][j] > 0 && !visited[i][j]){
                stack.push([i, j]);
                visited[i][j] = true;
                while(stack.length){
                    let [r, c] = stack.pop();

                    if(matrix[r][c] == 0){
                        continue;
                    }

                    for(let k = 0; k < 4; k++){
                        if(0 <= r + dy[k] && r + dy[k] < row && 
                            0 <= c + dx[k] && c + dx[k] < col){
                                if(!visited[r + dy[k]][c + dx[k]]
                                    && matrix[r + dy[k]][c + dx[k]] > 0
                                ){
                                    stack.push([r + dy[k], c + dx[k]]);
                                    visited[r + dy[k]][c + dx[k]] = true;
                                }
                        }
                    }

                }
                chunk ++;
            }
            
        }
    }
    if(chunk >= 2){
        return true;
    } else{
        return false;
    }
}

let years = 0;

while(true){
    if(countChunk(matrix)){
        console.log(years);
        break;
    }

    let meltAmount = Array.from( {length : row }, () => Array(col).fill(0)); 
    let hasIce = false;

    // 1년 후 녹을 양 세서
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(matrix[i][j] > 0){
                hasIce = true;
                meltAmount[i][j] += afterYear(i, j, matrix);
            }
        }
    }

    if(!hasIce){
        console.log(0);
        break;
    }

    // 녹은만큼 matrix에 적용(1년 후)
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(meltAmount[i][j] !== 0){
                matrix[i][j] -= meltAmount[i][j];
                if(matrix[i][j] < 0){
                    // 음수가 나온 경우
                    matrix[i][j] = 0;
                }
            }
        }
    }
    years ++;
}

