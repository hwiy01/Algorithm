const data = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const n = parseInt(data[0]);
const arr = data[1].split(' ').map(x=>parseInt(x));
const x = parseInt(data[2]);

arr.sort((a, b)=> a - b);

function binarySearch(start, end, target){
    while(start <= end){
        let mid = Math.floor((start + end) / 2);
        if(arr[mid] == target){
            arr.splice(mid, 1);
            return 1;
        }
        if(arr[mid] < target){
            start = mid + 1;
        } else{
            end = mid - 1;
        }
    }
    return 0;
}

let cnt = 0;
let i = 0;

while(arr.length){
    let k = arr.shift();
    let target = x - k;
    cnt += binarySearch(0, arr.length - 1, target);
}

console.log(cnt);