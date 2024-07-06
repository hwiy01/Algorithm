import sys

n = int(input())

stack = []

for _ in range(n):
    # strip을 통해 개행 문자 제거!!!!!
    orderinput = sys.stdin.readline().strip()

    if "push" in orderinput :
        _, numinput = orderinput.split()
        num = int(numinput)
        stack.append(num)

    elif(orderinput == "pop"):
        if(len(stack) == 0):
            print(-1)
        else:
             print(stack.pop())
        
    elif(orderinput == "top"):
        if(len(stack) == 0):
            print(-1)
        else:
            print(stack[len(stack)-1])

    elif(orderinput == "size"):
        print(len(stack))
    
    elif(orderinput == "empty"):
        if(len(stack) == 0):
            print(1)
        else:
            print(0)



        
        
        
    
