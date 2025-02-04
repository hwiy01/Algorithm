const data = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(data[0]);

const arr = data[1].split(' ').map(x=>parseInt(x));
//console.log(arr);
const dp = Array(n).fill(1000);
dp[n - 1] = 1001; // 맨 오른쪽 칸
dp[0] = 0; // 맨 왼쪽 칸

for(let i = 0; i < n; i++){
    for(let j = 1; j <= arr[i]; j++){
        // dp 업데이트..
        // 점프 후 인덱스 i + j
        if(i + j < n 
            && dp[i] + 1 < dp[i + j]){
            dp[i + j] = dp[i] + 1; 
        }
    }
}

if(dp[n-1] == 1001){
    console.log(-1);
} else{
    console.log(dp[n - 1]);
}
