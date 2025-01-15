const datas = require('fs').readFileSync('example.txt').toString().trim().split('\n');

const n = Number(datas[0]);
const matrix = datas.slice(1).map(x=>x.split(' ').map(x=>Number(x)));


// 순열 0 ~ N-1 을 순열
const visited = Array(n).fill(false);
const result = [];
let flag = 0;

function per(level, temp){
    if(level == n){
        let res = 0
        for(let i = 0; i < n - 1; i++){
            flag = 0;
            if(matrix[temp[i]][temp[i+1]] == 0){
                // 0인 경우 제외
                flag = 1;
                break;
            }
            res += matrix[temp[i]][temp[i+1]];
        }
        if(matrix[temp[n-1]][temp[0]] == 0){
           flag = 1;
        }
        if(!flag){
            res += matrix[temp[n-1]][temp[0]]; // 처음으로 돌아옴
            result.push(res);
        }
        return;
    }
    for(let i = 0; i < n; i++){
        if(visited[i] == true){
            continue;
        } 
        visited[i] = true;
        per(level + 1, [...temp, i]);
        visited[i] = false;
    }
}

per(0, []);

console.log(Math.min(...result));
