import sys

n = int(sys.stdin.readline())

lis = []

for _ in range(n):
    lis.append(int(input()))
    
lis.sort(reverse=True)
n = len(lis)

for i in range(n - 2):
    if(lis[i] < lis[i+1] + lis[i+2]):
        print(lis[i]+lis[i+1]+lis[i+2])
        break
else: 
    print(-1)
