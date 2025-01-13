const data = require('fs').readFileSync('/dev/stdin').toString();
const n = Number(data);

const dp = [];
dp.unshift(0);
dp.push(1);
dp.push(2);


for(let i = 3; i <= n; i++){
    dp.push((dp[i-2] + dp[i-1]) % 10007);
}

console.log(dp[n]);