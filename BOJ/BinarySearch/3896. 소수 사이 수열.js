const data = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = parseInt(data[0]);

//  true: 소수, false로 제거.
const numbers = Array(1299710).fill(true);
const primeNumbers = [];
const last = Math.floor(Math.sqrt(1299709));
let k = 2;

// 에라토스테네스의 체
for(let i = 2; i <= last; i++){
    k = 2;
    if(numbers[i] == true){
        while(i * k <= 1299709){
            numbers[i * k] = false // 제거, 제거된 수 = 합성수
            k ++;
        }
    }
}

// 소수 배열 만들기
for(let i = 1; i <= 1299709; i++){
    if(numbers[i] == true){
        primeNumbers.push(i);
    }
}

//이제 bs로..
let start = 1;
let end = 100000;
let mid = 50000;

for(let i = 1; i < T + 1; i++){
    let target = parseInt(data[i]);

    if(primeNumbers.includes(target)){
        console.log(0);
        continue;
    }

    start = 1;
    end = 100000;
    mid = 50000;

    while(start <= end){
        mid = Math.floor((start + end) / 2);

        if(target < primeNumbers[mid]){
            end = mid - 1;
        } else{
            start = mid + 1;
        }   
    }
    console.log(Math.abs(primeNumbers[end] - primeNumbers[start]));
}