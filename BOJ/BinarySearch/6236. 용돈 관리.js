const data = require('fs').readFileSync('example.txt').toString().trim().split('\n');

const [n, m] = data[0].split(' ').map(x=>parseInt(x));
const arr = data.slice(1, n+1).map(x=>parseInt(x));

let sum = 0;
let cnt = 1;
const total = arr.reduce((acc, value)=>acc + value, 0); 
let answer = total;

function binarySearch(start, end){
    // 최소 cost를 찾기 위해 범위를 점점 줄여나감
    // 일반적으로 특정 값을 찾기위한 bs가 아닌,
    // 범위를 줄여나가면서 최적값을 찾아내는 방식!
    while(start <= end){
        sum = 0;
        cnt = 1; // 처음에 쓸 돈 인출한 상태

        // 현재 최소 비용 = mid
        let mid = Math.floor((start + end)/2);

        // 현재 cost에서 몇번의 m이 필요한지 검사
        for(const money of arr){
            // 현재 값을 더했을 때 넘친다면, reset
            if( sum + money > mid){
                cnt ++;
                sum = money;
            } else{
                sum += money
            }
        }

        // cost를 더 줄여도 됨
        if(cnt <= m){
            answer = mid;
            end = mid - 1;
        } else{
            start = mid + 1;
        }
    }
    return answer;
}

console.log(binarySearch(Math.max(...arr), total));