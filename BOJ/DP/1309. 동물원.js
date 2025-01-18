let n = require('fs').readFileSync('/dev/stdin').toString().trim();

const dpA = [];
const dpB = [];

dpA.push(0);
dpB.push(0);

dpA.push(1); // 1
dpB.push(1); // 1
dpA.push(2); // 2
dpB.push(1); // 2


if(n >= 2){
    for(let i = 3; i <= n; i++){
        dpA.push((dpA[i - 1] + dpB[i - 1] * 2) % 9901);
        dpB.push((dpA[i - 1] + dpB[i - 1]) % 9901);
    }

    let answer = dpA[n] * 2 + dpB[n] * 3

    console.log(answer % 9901);
} else if(n == 1){
    console.log(3);
}





