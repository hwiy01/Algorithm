let [A, B, C] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(x=>BigInt(x));

function pow(a, b, c){
    if(b == 0) return BigInt(1);
    
    let half = pow(a, BigInt((b / BigInt(2))), c);

    // 홀수인 경우
    if(b % BigInt(2) == 1){
        return (((half * half) % C ) * a ) % C;
    } else{
        // 짝수인 경우
        return (half * half) % C;
    }
}

console.log(Number(pow(A, B, C)));