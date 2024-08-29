# BFS + 브루트포스

# 1. 3개의 벽을 놓을 위치를 뽑는다 , 브루트포스로 모든 경우에 대해 조사할 것임
# 2. 뽑은 경우에 대해 BFS를 통해 전염시킨 결과를 얻는다
# 3. 전염시킨 결과에 대한 안전 영역 개수를 센다
# 4. 센 결과를 result 리스트에 추가하고, 최댓값을 구한다 
import sys
from collections import deque
import copy

col, row = map(int, sys.stdin.readline().split())
lab = []
for _ in range(col):
    line = list(map(int, sys.stdin.readline().split()))
    lab.append(line)

# 전염시키기
def BFS(tempLab, starty, startx):
    dx = [1, -1, 0, 0]
    dy = [0, 0, -1, 1]
    queue = deque()
    queue.append((starty, startx))

    # 방문 처리를 2로 바꿈으로써
    while(queue):
        y, x = queue.popleft()
        
        for i in range(4):
            ix = x + dx[i]
            iy = y + dy[i]
            if(0 <= iy < col and 0 <= ix < row and (tempLab[iy][ix] == 0)):
                queue.append((iy, ix))
                tempLab[iy][ix] = 2 # 방문처리

    return tempLab

# 0인 경우들 리스트로 -> 조합에 사용
def findZero(lab):
    zeroList = []

    for i in range(col):
        for j in range(row):
            if lab[i][j] == 0:
                zeroList.append([i,j])

    return zeroList

# 안전영역 세는 함수
def count(tempLab):
    cnt = 0
    for i in range(col):
        for j in range(row):
            if(tempLab[i][j] == 0):
                cnt += 1

    return cnt

result = []

# tempZeros는 0인 좌표 [y,x]
# 조합으로 3개를 뽑고 3개에 대해 전염시키고 안전영역 확인
def comb(tempZeros, start, temp):
    if(len(temp) == 3):
        # 3개 고른 경우
        tempLabMatrix = copy.deepcopy(lab) # 새 리스트로 deepcopy해와서 조작
        for (y, x) in temp:
            tempLabMatrix[y][x] = 1
        
        # 2인 것에 대해 전염시키고
        for i in range(col):
            for j in range(row):
                if(tempLabMatrix[i][j] == 2):
                    BFS(tempLabMatrix, i, j)
        
        # 개수 세기
        cnt = count(tempLabMatrix)
        result.append(cnt)

        return
    
    for i in range(start, len(tempZeros)):
        comb(tempZeros, i + 1, temp + [tempZeros[i]])
    


zeroList = findZero(lab)
comb(zeroList, 0, [])

print(max(result))

