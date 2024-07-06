import sys
from collections import deque

n = int(input())

queue = deque()

for _ in range(n):
    inputOrder = sys.stdin.readline().strip()

    if ('push' in inputOrder):
        _, num =  inputOrder.split()
        queue.append(num)

    if inputOrder == "pop":
        if(len(queue)==0):
            print(-1)
        else:
            print(queue.popleft())

    elif inputOrder == "size":
        print(len(queue))

    elif inputOrder == "empty":
        if(len(queue)==0):
            print(1)
        else:
            print(0)

    elif inputOrder == "front":
        if(len(queue)==0):
            print(-1)
        else:
            print(queue[0])

    elif inputOrder == "back":
        if(len(queue)==0):
            print(-1)
        else:
            print(queue[len(queue)-1])
