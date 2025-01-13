const data = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const dp = new Array(51).fill(0)
    .map(() => new Array(51).fill(0)
        .map(()=> new Array(51).fill(0)));

function w(a, b, c){
    let res = 0;
    if(a <= 0 || b <= 0 || c <= 0)
        return 1;
    else if(dp[a][b][c]){
        return dp[a][b][c];
    }
    else if(a > 20 || b > 20 || c > 20){
        res = w(20, 20, 20);
    }
    else if(a < b && b < c){
        res =  w(a, b, c-1) + w(a, b-1, c-1) - w(a, b-1, c);
    }
    else{
       res = w(a-1, b, c) + w(a-1, b-1, c) + w(a-1, b, c-1) - w(a-1, b-1, c-1);
    }
    dp[a][b][c] = res;
    return res;
}


for(let i = 0; i < data.length; i ++){
    const lis = data[i].split(' ').map(x=>Number(x));
    if(lis[0] == -1 && lis[1] == -1 && lis[2] == -1){
        break;
    } else{
        let answer = w(lis[0], lis[1], lis[2])
        console.log(`w(${lis[0]}, ${lis[1]}, ${lis[2]}) = ${answer}`);
    }

}




