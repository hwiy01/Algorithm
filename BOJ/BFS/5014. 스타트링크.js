const [F, S, G, U, D] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>parseInt(x));

const queue = [[S, 0]];
const visited = Array(F + 1).fill(false);
let answer = -1;


while(queue.length){
    let [curFloor, cnt] = queue.shift();

    if(curFloor === G){
        answer = cnt;
        break;
    }

    if(!visited[curFloor + U] && curFloor + U <= F){
        queue.push([curFloor + U, cnt + 1]);
        visited[curFloor + U] = true;
    }

    if(!visited[curFloor - D] && curFloor - D >= 1){
        queue.push([curFloor - D, cnt + 1]);
        visited[curFloor - D] = true;
    }
}


console.log(answer === -1 ? 'use the stairs' : answer);