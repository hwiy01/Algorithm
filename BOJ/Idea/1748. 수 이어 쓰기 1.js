let n = require('fs').readFileSync('/dev/stdin').toString().trim()

const len = n.length;
n = parseInt(n);

let result = 0;
let k = '';

// i = 1일 때

for(let i = 0; i < len - 1; i++){
    result += (9 * 10 ** i) * (i + 1);
    k += 1;
    //console.log(parseInt(k));
}

result += (n - 9 * parseInt(k)) * len

if(len == 1){
    console.log(n);
} else{
    console.log(result);
}

