const data = require('fs').readFileSync('example.txt').toString().split('\n');
const [n, m] = data[0].split(' ').map(x=>parseInt(x));

// 집합
const notListen = new Set();
const notSeen = new Set();

for(let i = 1; i < 1 + n; i++){
    notListen.add(data[i]);
}

for(let i = 1 + n; i < 1 + n + m; i++){
    notSeen.add(data[i]);
}

const result = [...notListen].filter(x=>notSeen.has(x));


result.sort();

console.log(result.length);
console.log(result.join('\n'));