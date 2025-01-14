const datas = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const n = Number(datas[0].split(' ')[0]);
const m = Number(datas[0].split(' ')[1]); // 뽑아내려는 개수

let queue = []; // 1~n까지의 자연수
let cnt = 0;

for(let i = 1; i <= n; i++){
    queue.push(i);
}

const peak = datas[1].split(' ').map(x=>Number(x));

function shiftLeft(queue) {
    let temp = queue.shift()
    queue.push(temp);
    return queue;
}

function shiftRight(queue) {
    let temp = queue.pop()
    queue.unshift(temp);
    return queue;
}

while(peak.length != 0){
    let item = peak.shift();
    let index = queue.indexOf(item, 0);
    while(true){
        if(queue[0] == item){
            queue.shift();
            break;
        }
        else if(queue.length - index >= index){
            queue = shiftLeft(queue);
            cnt ++;
        }else{
            queue = shiftRight(queue);
            cnt ++;
        }
    }
    
}

console.log(cnt);