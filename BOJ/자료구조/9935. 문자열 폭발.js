const data = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let str = data[0];
const bomb = data[1];
const bombLen = bomb.length;

let stack = [];

for(let i = 0; i < str.length; i++){
    stack.push(str[i]);

    if(stack.slice(stack.length - bombLen, stack.length).join('') === bomb){
        stack.splice(stack.length - bombLen, stack.length);
    }
}


console.log(stack.length ? stack.join('') : "FRULA");