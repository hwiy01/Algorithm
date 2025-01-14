const datas = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for(let i = 0; i < datas.length; i++){
    // 종료 조건 보기
    if(datas[i] == '.'){
        break;
    } else{
        const stack = [];
        let ans = 'yes';
        // 한 문장 탐색
        for(let j = 0; j < datas[i].length; j++){
            // [ 또는 ( 를 발견 시 push
            if(datas[i][j] == '['){
                stack.push('[');
            }
            else if(datas[i][j] == '('){
                stack.push('(');
            }
            else if(datas[i][j] == ']'){
                if(stack.pop() == '['){
                    continue;
                } else{
                    ans = 'no';
                    break;
                }
            }
            else if(datas[i][j] == ')'){
                if(stack.pop() == '('){
                    continue;
                } else{
                    ans = 'no';
                    break;
                }
            }
            // 괄호가 아닌 경우 continue..
        }
        if(stack.length != 0){
            ans = 'no';
        }
        console.log(ans);
    }
}