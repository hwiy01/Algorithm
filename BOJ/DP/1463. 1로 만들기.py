n = int(input())

memo = [0] * (n + 1)

## bottom -> up으로 올라가며, 저장해둔 이전 bottom 값들을 
## 이용하여 상위 값을 계산함
for i in range(2, n + 1):
    memo[i] = memo[i - 1] + 1
    if(i % 3 == 0):
        memo[i] = min(memo[i], memo[i // 3] + 1)
    if(i % 2 == 0):
        memo[i] = min(memo[i], memo[i // 2] + 1)

print(memo[n])
    