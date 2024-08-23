# 투포인터
import sys

n = input()

lis = list(map(int, sys.stdin.readline().split()))
lis.sort()

start = 0
end = len(lis) - 1
# 모든 걸 검색 후 best 값을 설정하고, 갱신하는 방법
# 현재 값이 0인 경우 현재 값 출력


# 무한으로 설정
bestSum = float('inf')
bestPair = (lis[start], lis[end])

while(start < end):
    sum = lis[start] + lis[end]

    # 최적값 갱신
    if(abs(bestSum) > abs(sum)):
        bestSum = sum
        bestPair = (lis[start], lis[end])
   
    if(sum == 0):
         bestPair = (lis[start], lis[end])
         break
    elif (sum < 0):
        start += 1
    else: 
        end -= 1

print(bestPair[0], bestPair[1])