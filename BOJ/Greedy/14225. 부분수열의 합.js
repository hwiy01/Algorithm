const datas =  require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(datas[0]);

const lis = datas[1].split(' ').map(x=>parseInt(x));
lis.sort((a, b) => a - b);

let sum = 0;

for(let i = 0; i < n; i++){
    if(sum + 1 < lis[i]){
        console.log(sum + 1);
        process.exit();
    }
    sum += lis[i];
}

console.log(sum + 1);

