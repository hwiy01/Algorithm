const datas = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = parseInt(datas[0]);

for(let i = 1; i < n + 1; i++){
    let string = [...datas[i]];
    lStack = [];
    rStack = [];
    for(let j = 0; j < string.length; j++){
        if(string[j] == '<'){
            if(lStack.length){
                rStack.push(lStack.pop());
            }
        } 
        else if(string[j] == '>'){
            if(rStack.length){
                lStack.push(rStack.pop());
            }
        }
        else if(string[j] == '-'){
            if(lStack.length){
                lStack.pop();
            }
            continue;
        }
        else{
            lStack.push(string[j]);
        }
    }
    let answer = lStack.join('');
    answer += rStack.reverse().join('');
    console.log(answer);
}

