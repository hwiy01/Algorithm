import sys

n, k = map(int, sys.stdin.readline().split())

lis = []

for i in range(1, n+1):
    lis.append(i)

index = 0

result = []

while (len(lis) != 0):
    index += (k-1)
    index %= len(lis)
    result.append(lis[index])
    del lis[index]


print("<", end='')
print(", ".join(map(str, result)), end="")
print(">")
