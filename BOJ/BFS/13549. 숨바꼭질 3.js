const [n, k] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(x=>parseInt(x));
const visitied = Array(100001).fill(false);

const queue = [[n, 0]];

while(queue.length){
    let [cur, sec] = queue.shift();

    if(cur === k){
        console.log(sec);
        break;
    }

    visitied[cur] = true;

    for(next of [cur * 2, cur - 1, cur + 1]){
        if(!visitied[next] && next >= 0 && next <= 100000){
            visitied[next] = true;
            if(next == cur * 2){
                queue.unshift([next, sec]);
            } else{
                queue.push([next, sec + 1]);
            }
        }
    }
}