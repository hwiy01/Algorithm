# stack

lis, stack, op = [], [], []

n = int(input())
for _ in range(n):
    lis.append(int(input()))


idx = 0
cur = 1 # push 연산 시 들어갈 값
end = len(lis) - 1
i = 0

for num in lis:
    # 목표 num 보다 작을 때 계속 push
    while(cur <= num):
        stack.append(cur)
        op.append('+')
        cur += 1

    if stack and stack[-1] == num:
        stack.pop()
        op.append('-')
    else:
        op = ['NO']
        break

for result in op:
    print(result)

    