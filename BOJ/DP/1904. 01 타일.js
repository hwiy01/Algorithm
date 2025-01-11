const datas = require('fs').readFileSync('/dev/stdin').toString().trim();
const N = Number(datas);

const dp = [];

dp.push(0);
dp.push(1); //1
dp.push(2); //2

if(N < 3){
    console.log(dp[N]);
}
else{
    for(let i = 3; i <= N; i++){
        dp[i] = (dp[i-1] + dp[i-2]) % 15746;
    }
    console.log(dp[N]);
}

