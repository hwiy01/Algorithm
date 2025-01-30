const data = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const n = parseInt(data[0]);
const house = data[1].split(' ').map(x=>parseInt(x));

// 중앙값과 가장 가까운 수

house.sort((a, b)=> a - b);
const medianIndex = Math.round(n / 2);

console.log(house[medianIndex - 1]);