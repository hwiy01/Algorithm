from collections import deque
import sys

n = int(input())
queue = deque()

for _ in range(n):
    command = sys.stdin.readline().split()
    
    order = command[0] 
    if(len(command) > 1):
        x = int(command[1])

    if(order == 'push_front'):
        queue.appendleft(x)

    elif(order == 'push_back'):
        queue.append(x)

    elif(order == 'pop_front'):
        if(len(queue) == 0):
            print(-1)
        else:
            num = queue.popleft()
            print(num)
    
    elif(order == 'pop_back'):
        if(len(queue) == 0):
            print(-1)
        else:
            num = queue.pop()
            print(num)

    elif(order == 'size'):
        print(len(queue))

    elif(order == 'empty'):
        if(len(queue) == 0):
            print(1)
        else:
            print(0)

    elif(order == 'front'):
        if(len(queue) == 0):
            print(-1)
        else:
            print(queue[0])

    elif(order == 'back'):
        if(len(queue) == 0):
            print(-1)
        else:
            print(queue[len(queue)-1])