const data = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(data[0]);
const dp = [[0], [parseInt(data[1])]];

if(n >= 2){
    for(let i = 2; i < n + 1; i++){
        dp.push(Array(i).fill(0));
        for(let j = 0; j < i; j++){
            let curValue = parseInt(data[i].split(' ')[j]);
            // 양 끝
            if( j == 0 ){
                dp[i][j] = dp[i - 1][j] + curValue;
            } else if ( j == i - 1){
                dp[i][j] = dp[i - 1][j - 1] + curValue;
            } 
            // 중간 부분
            else{
                dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + curValue;
            }
        }
    }
    console.log(Math.max(...dp[n]));
} else{
    console.log(...dp[1]);
}


