const data = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const t = parseInt(data[0]);

// 나이트 이동 가능 범위
const dy = [2, 2, 1, 1, -1, -1, -2, -2];
const dx = [-1, 1, -2, 2, -2, 2, -1, 1];


function BFS(row, col, vistited, goalRow, goalCol, I){
    let queue = [[row, col, 0]];
    vistited[row][col] = true;

    while(queue.length){
        let [r, c, cnt] = queue.shift();

        if(r === goalRow && c === goalCol){
            return cnt;
        }

        for(let i = 0; i < 8; i++){
            if(0 <= r + dy[i] && r + dy[i] < I && 0 <= c + dx[i] && c + dx[i] < I){
                if(!vistited[r + dy[i]][c + dx[i]]){
                    queue.push([r + dy[i], c + dx[i], cnt + 1]);
                    vistited[r + dy[i]][c + dx[i]] = true;
                }     
            }
    }}
}


for(let i = 0; i < t; i++){
    let I = parseInt(data[i*3 + 1]);
    let init = data[3*i+2].split(' ').map(x=>parseInt(x));
    let goal = data[3*i+3].split(' ').map(x=>parseInt(x)); 
    let visited = Array.from( { length : I }, () =>  Array(I).fill(false));

    console.log(BFS(init[0], init[1], visited, goal[0], goal[1], I));
}



