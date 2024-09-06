# 대각선 추가된 BFS
import sys
from collections import deque

def BFS(maps, starty, startx, w, h):
    queue = deque()
    # 마지막 네개는 대각선
    dx = [-1, 1, 0, 0, -1, 1, 1, -1]
    dy = [0, 0, 1, -1, 1, -1, 1, -1] 
    queue.append((starty, startx))
    
    while(queue):
        y, x = queue.popleft()
        for i in range(8):
            if(0 <= y + dy[i] < h and 0 <= x + dx[i] < w):
                if(maps[y + dy[i]][x + dx[i]]):
                    queue.append((y + dy[i], x + dx[i]))
                    maps[y + dy[i]][x + dx[i]] = 0
    return 1

while(1):
    cnt = 0
    w, h = map(int, input().split())
    if(w == 0 and h == 0):
        break
    maps = []
    for _ in range(h):
        maps.append(list(map(int, sys.stdin.readline().split())))
    
    for i in range(h):
        for j in range(w):
            if(maps[i][j] == 1):
                cnt += BFS(maps, i, j, w, h)

    print(cnt)