const [A, B, C] = require('fs').readFileSync('example.txt').toString().split(' ').map(x=>parseInt(x));
const queue = [[0, 0]]; // [a, b] 
const result =[];
const visited = new Set();

while(queue.length){
    let [a, b] = queue.shift();
    let c = C - (a + b);

    if(a === 0){
        // c에 들은 물 양
        result.push(c);
    }

    if(a > 0){
        // a->b
        if(B - b < a){
            if(!visited.has(`${a - (B - b)},${B}`)){
                queue.push([a - (B - b), B]);
                visited.add(`${a - (B - b)},${B}`);
            }
        } else{
            if(!visited.has(`0,${b + a}`)){
                queue.push([0, b + a]);
                visited.add(`0,${b + a}`)
            }
        }
        // a->c
        if(C-c < a){
            if(!visited.has(`${a - (C-c)},${b}`)){
                queue.push([a - (C-(c)), b]);
                visited.add(`${a - (C-c)},${b}`);
            }
        } else{
            if(!visited.has(`0,${b}`)){
                queue.push([0, b]);
                visited.add(`0,${b}`);
            }
        }
    } 
    if(b > 0){
        // b->a
        if(A - a < b){
            if(!visited.has(`${A},${b - (A - a)}`)){
                queue.push([A, b - (A - a)]);
                visited.add(`${A},${b - (A - a)}`);
            }
        } else{
            if(!visited.has(`${a+b},0`)){
                queue.push([a + b, 0]);
                visited.add(`${a+b},0`);
            }
        }
        // b->c
        if(C-c < b){
            if(!visited.has(`${a},${b-(C-c)}`)){
                queue.push([a, b - (C-c)]);
                visited.add(`${a},${b-(C-c)}`);
            }
        } else{
            if(!visited.has(`${a},0`)){
                queue.push([a, 0]);
                visited.add(`${a},0`);
            }
        }
    }
    if(c > 0){
        // c->a
        if(A - a < c){
            if(!visited.has(`${A},${b}`)){
                queue.push([A, b]);
                visited.add(`${A},${b}`);
            }
        } else{
            if(!visited.has(`${a+c},${b}`)){
                queue.push([a + c, b]);
                visited.add(`${a+c},${b}`);
            }
        }
        // c->b
        if(B - b < c){
            if(!visited.has(`${a},${B}`)){
                queue.push([a, B]);
                visited.add(`${a},${B}`);
            }
        } else{
            if(!visited.has(`${a},${b+c}`)){
                queue.push([a, b + c]);
                visited.add(`${a},${b+c}`);
            }
        }
    }
}

const answer = new Set([...result].sort((a,b)=>a-b));
console.log(...answer);