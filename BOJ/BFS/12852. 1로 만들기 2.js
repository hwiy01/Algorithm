const n = parseInt(require('fs').readFileSync('/dev/stdin').toString());

const path = Array(n + 1).fill(0);
const queue = [[n, 0]];
const visited = Array(n + 1).fill(false);
let resultCnt = 0;

// BFS + DP
while(queue.length){
    let [x, cnt] = queue.shift();
    visited[x] = true;
    if(x === 1){
        resultCnt = cnt;
        break;
    }

    if(x % 3 == 0){
        if(!visited[x / 3] && !path[x / 3]){
            queue.push([x / 3, cnt + 1]);
            path[x / 3] = x;
        }
    } 
    if(x % 2 == 0){
        if(!visited[x / 2] && !path[x / 2]){
            queue.push([x / 2, cnt + 1]);
            path[x / 2] = x;
        }
    }

    if(!visited[x - 1] && !path[x-1]){
        queue.push([x - 1, cnt + 1]);
        path[x-1] = x;
    }
}

let answer = [1];
let next = 1;
console.log(resultCnt);
for(let i = 0; i < resultCnt; i++){
   answer.push(path[next])
   next = path[next];
}

console.log(answer.reverse().join(' '));