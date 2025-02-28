const data = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [n, m] = data[0].split(' ').map(x=>parseInt(x));
const atParty = data[1].split(' ').map(x=>parseInt(x));
const knowTruth = Array(n + 1).fill(false);
const visited = Array(n + 1).fill(false);

// 자료구조 - 그래프
const graph = Array.from({length : n + 1}, () => Array().fill());

// 각각의 파티들에 대해 관계 넣기 - 연결리스트로
for(let i = 2; i < m + 2; i++){
    let nowArr = data[i].split(' ').map(x=>parseInt(x));

    for(let j = 1; j <= nowArr[0] - 1; j ++){
        graph[nowArr[j]].push(nowArr[j + 1]);
        graph[nowArr[j + 1]].push(nowArr[j]);
    }
}

// graph 따라가며 조사
function BFS(visited, k) {
    let queue = [];
    queue.push(k);
    knowTruth[k] = true;

    while(queue.length){
        let now = queue.shift();

        for(let i = 0; i < graph[now].length; i++){
            if(!visited[graph[now][i]]){
                visited[graph[now][i]] = true;
                queue.push(graph[now][i]);
                knowTruth[graph[now][i]] = true;
            }
        }
    }
}

// 파티에 대해 아는 사람들을 채움
for(let i = 1; i <= atParty[0]; i++){
    let k = atParty[i];
    BFS(visited, k);
}


let cnt = 0;

for(let i = 2; i < m + 2; i++){
    
    let nowArr = data[i].split(' ').map(x=>parseInt(x));

    let flag = 1;

    for(let j = 1; j <= nowArr[0]; j ++){
        if(knowTruth[nowArr[j]] == true){
            // 말 x
            flag = 0;
            break;
        } 
    }
    if(flag == 1){
        cnt ++;
    }
}

console.log(cnt);