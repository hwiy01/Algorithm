const tree = {};

const data = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = parseInt(data[0]);

for(let i = 1; i <= n; i++){
    let [p, l, r] = data[i].split(' ');
    tree[p] = [l, r];
}

let result = "";

function preOrder(node){
    if(node === '.') return;
    const [lt, rt] = tree[node];
    result += node;
    preOrder(lt);
    preOrder(rt);
}

function inOrder(node){
    if(node === '.') return;
    const [lt, rt] = tree[node];
    inOrder(lt);
    result += node;
    inOrder(rt);
}

function postOrder(node){
    if(node === '.') return;
    const [lt, rt] = tree[node];
    postOrder(lt);
    postOrder(rt);
    result += node;
}

preOrder('A');
result += '\n';
inOrder('A');
result += '\n';
postOrder('A');

console.log(result);