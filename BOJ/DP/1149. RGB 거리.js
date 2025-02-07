const data = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(data[0]);

// DP
const dp = [];
dp.push([0, 0, 0]); // index 1부터 시작
dp.push(data[1].split(' ').map(x=>parseInt(x))) // DP 첫번째 값 넣기


for(let i = 2; i < n + 1; i++){
    let [curR, curG, curB] = data[i].split(' ').map(x=>parseInt(x));
    // 현재에서 R, G, B 중 선택하는 경우의 수
    let r = Math.min(dp[i - 1][1], dp[i - 1][2]) + curR;
    let g = Math.min(dp[i - 1][0], dp[i - 1][2]) + curG;
    let b = Math.min(dp[i - 1][0], dp[i - 1][1]) + curB;
    dp.push([r, g, b]);
}

console.log(Math.min(...dp[n]));