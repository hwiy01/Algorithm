# 그래프 - 인접 리스트로 표현
from collections import deque

n = int(input()) # 1 ~ n명

adjacencyList = [[]for _ in range(n+1)] # 리스트[0]은 그냥 빈값으로

person1, person2 = map(int, input().split())

k = int(input())

for _ in range(k):
    x, y = map(int, input().split())
    adjacencyList[x].append(y)
    adjacencyList[y].append(x)



# 인접리스트에서, 원하는 노드까지 BFS로 탐색
def BFS(start, target):
    queue = deque()
    queue.append((start, 0))

    visited = [False] * (n+1)
    visited[start] = True

    while(queue):
        cur, cnt = queue.popleft()

        if(cur == target):
            return cnt 

        for e in adjacencyList[cur]:
            if not visited[e]:
                visited[e] = True
                queue.append((e, cnt + 1))
        
    return -1

print(BFS(person1, person2))
