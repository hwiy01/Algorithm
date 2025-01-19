const datas = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(datas[0]);
const tcs = datas.slice(1).map(x=>Number(x));

const dp = [];

dp.push(0);
dp.push(1);
dp.push(1);
dp.push(1);
dp.push(2);
dp.push(2);
dp.push(3);

for(let i = 6; i <= Math.max(...tcs); i++){
    dp[i] = dp[i-1] + dp[i-5];
}

for(let i = 0; i < n; i++){
    console.log(dp[tcs[i]]);
}