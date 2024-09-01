# 브루트포스
# 시간초과.. elif문, 함수 호출문 지우고 pypy3으로 제출했더니 됨..
import sys

n, m, b = map(int, sys.stdin.readline().split())

block = []

minValue = float('inf')
maxValue = 0

# 최소 높이 ~ 최대 높이값 중에서 높이 정해 해당 높이들까지 구해보는 브루트포스
for _ in range(n):
    line = list(map(int, sys.stdin.readline().split()))
    if(max(line) > maxValue):
        maxValue = max(line)
    if(minValue > min(line)):
        minValue = min(line)
    block.append(line)


maxh = 0
mint = float('inf')


for h in range(minValue, maxValue + 1):
    # 해당 높이까지 블록 고르게 작업
    time = 0
    bnum = b # 가진 블록 수
    for i in range(n):
        for j in range(m):
            # height까지 깎기
            if(block[i][j] > h):
                time += 2 * (block[i][j] - h)
                bnum += (block[i][j] - h)

            # heigth까지 블록 쌓아올리기
            else:
                time += (h - block[i][j])
                bnum -= (h - block[i][j])

    # 블록 수 모자랄 시
    if(bnum < 0):    
        continue

    if(mint >= time and maxh <= h):
        mint = time
        maxh = h

print(mint, maxh)