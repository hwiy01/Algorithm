const data = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const n = parseInt(data[0]);
let cnt = n;

for(let i = 1; i <= n; i++){
    let word = data[i];
    let wordChecker = Array(26).fill(false);
    let before = '';

    for(let j = 0; j < data[i].length; j++){

        if(wordChecker[word[j].charCodeAt(0) - 97] == false || before == word[j]){
            // 방문한 적이 없거나, 이전 단어와 같은 경우
            wordChecker[word[j].charCodeAt(0) - 97] = true;
            before = word[j];
            continue; 
        } else{
            cnt --;
            break;
        }
        
    }
}

console.log(cnt);