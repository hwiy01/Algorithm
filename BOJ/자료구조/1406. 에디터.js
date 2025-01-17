const datas = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const m = parseInt(datas[1]);

const lStack = [...datas[0]];
const rStack = [];

for(i = 2; i < m + 2; i++){
    let [cmd, value] = datas[i].split(" ");
    if(cmd == 'L' && lStack.length){
        rStack.push(lStack.pop());
    }
    else if(cmd == 'D' && rStack.length){
        lStack.push(rStack.pop());
    }
    else if(cmd == 'B' && lStack.length){
        lStack.pop();
    }
    else if(cmd == 'P'){
        lStack.push(value);
    }
}

let answer = lStack.join('');
answer += rStack.reverse().join('');
console.log(answer);
