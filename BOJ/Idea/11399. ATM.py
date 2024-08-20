import sys

# 그리디

n = int(input())

lis = list(map(int, sys.stdin.readline().split()))

lis.sort()

sum = 0

for i in range(n):
    for idx in range(0, i+1):
        sum += lis[idx] 
    
print(sum)