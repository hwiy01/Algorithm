# 그리디
# 일단 가능한 것 선택하고 봄
import sys

n = int(input())

lis = []

for idx in range(n):
    newLis = list(map(int, sys.stdin.readline().split()))
    lis.append(newLis)

# 핵심은 빨리 시작하는것부터가 아니라, 빨리 끝나는 것부터 선택하는 것!!
lis.sort(key=lambda x : (x[1], x[0]))

cnt = 1
end = lis[0][1]

for i in range(1, len(lis)):
    if(lis[i][0] >= end):
        cnt += 1
        end = lis[i][1]

print(cnt)



