import sys
from collections import deque
sys.setrecursionlimit(10**6) # 런타임에러 제거!!!
# 그냥 BFS로 세고,
# 적록색맹이 보이는 걸로 바꿔서 세기

area = []

n = int(input())

for _ in range(n):
    # rstrip : 오른쪽 \n 제거
    area.append(list(sys.stdin.readline().rstrip()))

test1 = [e[:] for e in area]
test2 = [e[:] for e in area]

queue = deque()
cnt1 = 0
cnt2 = 0

# 같은 색 검사
# 방문 시 0으로 바꾸기
def BFS1(matrix, x, y, word):
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]
    queue.append((x,y))

    while(queue):
        a, b = queue.popleft()

        for i in range(4):     
            if(0 <= a + dx[i] < n and 0 <= b + dy[i] < n):
                if(matrix[b + dy[i]][a + dx[i]] and word == matrix[b + dy[i]][a + dx[i]]):
                    # 방문처리
                    test1[b + dy[i]][a + dx[i]] = 0
                    BFS1(test1, a + dx[i], b + dy[i], word)

    return 1

# 같은 색 검사
# 방문 시 0으로 바꾸기
def BFS2(matrix, x, y, word):
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]
    queue.append((x,y))
   
    while(queue):
        a, b = queue.popleft()

        for i in range(4):     
            if(0 <= a + dx[i] < n and 0 <= b + dy[i] < n):
                if(matrix[b + dy[i]][a + dx[i]] and word == matrix[b + dy[i]][a + dx[i]]):
                    # 방문처리
                    test2[b + dy[i]][a + dx[i]] = 0
                    BFS2(test2, a + dx[i], b + dy[i], word)

    return 1

for i in range(n):
    for j in range(n):
        if(test1[i][j]):
            cnt1 += BFS1(test1, j, i, test1[i][j])

        
# G->R로 바꾸기
for i in range(n):
    for j in range(n):
        if(test2[i][j] == 'R'):
            test2[i][j] = 'G'

for i in range(n):
    for j in range(n):
        if(test2[i][j]):
            cnt2 += BFS2(test2, j, i, test2[i][j])

print(cnt1, cnt2)