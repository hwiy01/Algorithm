const [n, k] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(x=>parseInt(x));

// BFS
const queue = [[n, 0]];
const visited = Array(100001).fill(false);
visited[n] = true;

while(queue.length){
    let [x, s] = queue.shift();

    if(x === k){
        console.log(s);
        break;
    }

    if(!visited[x * 2] && x * 2 <= 100000){
        queue.push([x * 2, s + 1]);
        visited[x * 2] = true;
    }
    if(!visited[x - 1] && x - 1 >= 0){
        queue.push([x - 1, s + 1]);
        visited[x - 1] = true;
    }
    if(!visited[x + 1] && x + 1 <= 100000){
        queue.push([x + 1, s + 1]);
        visited[x + 1] = true;
    }
}