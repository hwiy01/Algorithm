const data = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = parseInt(data[0]);
const arr = data[1].split(' ').map(x=>parseInt(x));

const dp = Array(n).fill(1);

for(let i = 0; i < n; i++){
    for(let j = 0; j < i; j++){
        if(arr[j] < arr[i]){
            dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }
}

console.log(Math.max(...dp));