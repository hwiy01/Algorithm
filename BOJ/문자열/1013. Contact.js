const data = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = parseInt(data[0]);
let str = '';
const regExp = /^(100+1+|01)+$/

for(let tc = 1; tc <= n; tc++){
    str = data[tc];

    if(regExp.test(str)){
        console.log('YES');
    } else{
        console.log('NO');
    }
}