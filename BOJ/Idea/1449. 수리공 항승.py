# 범위를 바꿔가며, 해당 범위에 있는지 검사!!
import sys

n, l = map(int, sys.stdin.readline().split())
pipe = []

pipe = list(map(int, sys.stdin.readline().split()))
pipe.sort()

start = pipe[0]
cnt = 1

for x in pipe[1:]:
    if(x in range(start, start+l)):
        continue

    else: 
        cnt += 1
        start = x

print(cnt)