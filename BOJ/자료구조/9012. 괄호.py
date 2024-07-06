import sys
n = int(input())

# parenthesis의 원리인 스택을 이용하자

for _ in range(n):
    lis = list(sys.stdin.readline())
    stack = []
    for idx in range(len(lis)):
        if (lis[idx] == '('):
            stack.append(1)
        if(lis[idx] == ')'):
            if(len(stack) == 0):
                print('NO')
                break
            stack.pop()
    else:
        if(len(stack) == 0):
            print('YES')
        else:
            print('NO')
    


        
        
        
    
