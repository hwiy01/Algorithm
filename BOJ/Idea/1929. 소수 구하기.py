# 에라토스테네스의 체

import math

m, n = map(int, input().split())

# 1일 때 소수, 0일 때 소수 아님
result = [1] * (n+1)

nsqrt = int(math.sqrt(n))


for i in range(2 , nsqrt + 1):
    if result[i] == 1:
        for j in range(i + i, n + 1, i):
            result[j] = 0

for num in range(m, n + 1):
    if result[num] == 1 and num != 1:
        print(num)
