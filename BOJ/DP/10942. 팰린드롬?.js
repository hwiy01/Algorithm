const data = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = parseInt(data[0]);
const arr = data[1].split(' ').map(x=>parseInt(x));
const m = parseInt(data[2]);

const dp = Array.from({length : n}, ()=> Array(n).fill(0));

// i ~ j부터의 범위에 대한 정보를 저장

for(let i = 0; i < n; i++){
    dp[i][i] = 1;
}

// 길이 2짜리 팰린드롬
for(let i = 0; i < n - 1; i++){
    if(arr[i] == arr[i + 1]){
        dp[i][i + 1] = 1;
    }
}

// 길이 3이상 팰린드롬
for(let len = 3; len <= n; len ++){
    for(let start = 0; start <= n - len; start++){
        let end = start + len - 1; // 끝점
        if(arr[start] === arr[end] && dp[start + 1][end - 1] === 1){
            dp[start][end] = 1;
        }
    }
}

const result = [];

for(let i = 3; i < 3 + m; i++){
    let [s, e] = data[i].split(' ').map(x=>parseInt(x));
    result.push(dp[s - 1][e - 1])
}

console.log(result.join('\n'));