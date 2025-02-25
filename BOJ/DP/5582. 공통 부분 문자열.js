const data = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const str1 = data[0];
const str2 = data[1];
const str1Len = str1.length;
const str2Len = str2.length;

const dp = Array.from( {length : str1Len + 1}, () => Array(str2Len + 1).fill(0));

let maxLen = 0;

for(let i = 0; i < str1Len; i++){
    for(let j = 0; j < str2Len; j++){
        if(str1[i] === str2[j]){
            dp[i + 1][j + 1] = dp[i][j] + 1;
            if(dp[i][j] + 1 > maxLen){
                maxLen = dp[i][j] + 1
            }
        }
    }
}

console.log(maxLen);