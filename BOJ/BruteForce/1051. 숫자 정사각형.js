const datas = require('fs').readFileSync('example.txt').toString().split('\n');

const data = datas[0];
const n = Number(data.split(' ')[0]);
const m = Number(data.split(' ')[1]);

const matrix = datas.slice(1).map(x=>x.split('').map(x=>Number(x)));

let size = 1;

let i = Math.min(n, m);
// size를 줄여가며 확인
for(let k = i; k >= 2; k--){
    // 특정 size에 대해 존재하는지 확인
    // row에 대해 (가로) 시작점 설정
    for(let r = 0; r <= n - k; r++){
        // col에 대해 (세로) 시작점 설정
        for(let c = 0; c <= m - k; c++){
            if(matrix[r][c] == matrix[r][c + k - 1]
                && matrix[r][c] == matrix[r + k - 1][c]
                && matrix[r][c] == matrix[r + k - 1][c + k - 1]){
                size = Math.max(size, k);       
            }
        }
    }
}

console.log(size * size);