import sys

s = sys.stdin.readline().strip()

stack = []
result = ''
check = False # 괄호 안 여부 체크 -> 공백 검사 시 이용

# <, >를 만날때마다 스택에 값들을 넣었다가 빼며 result에 추가
for char in s:
    if(char == '<'):
        check = True
        # 이전의 값들(괄호 밖의 값들)을 스택에서 꺼내서 추가
        for _ in range(len(stack)):
            result += stack.pop()

    stack.append(char)

    if(char == '>'):
        check = False
        # 지금까지의 값들(괄호 안의 값) 스택에서 거꾸로 꺼내서 추가
        for _ in range(len(stack)):
            result += stack.pop(0)

    if(char == ' ' and check == False):
        for i in range(len(stack)):
            # 공백은 그대로 두고 뒤집어야하므로
            if(i == 0):
                stack.pop()
                continue
            result += stack.pop()
        result += ' '

# 스택에 남은 값들
if stack:
    for _ in range(len(stack)):
            result += stack.pop()

print(result)