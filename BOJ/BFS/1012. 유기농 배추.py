import sys
from collections import deque
t = int(sys.stdin.readline())

# BFS로 시작 노드에서부터 주변노드 모두 탐색,
# 주변 모두 탐색 시 종료.
def BFS (starty, startx):
    queue = deque()
    queue.append((starty, startx))

    while (queue):
        y, x = queue.popleft()

        for i in range(4):
            ix = x + dx[i]
            iy = y + dy[i]

            if (0 <= ix < m and 0 <= iy < n and matrix[iy][ix] == 1):
                queue.append((iy, ix))
                matrix[iy][ix] = 0
        
    return 1
        
    
for _ in range(t):
    # matrix 담기
    m, n, k = map(int, sys.stdin.readline().split())
    matrix = [[0 for _ in range(m)] for _ in range(n)]
    for _ in range(k):
        x, y = map(int, sys.stdin.readline().split())
        matrix[y][x] = 1

    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]

    totalCnt = 0
    for i in range(n): 
        for j in range(m): 
            if(matrix[i][j]) == 1:
                totalCnt += BFS(i, j)
    print(totalCnt)


