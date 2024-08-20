import sys

n = int(input())

lis = list(map(int, sys.stdin.readline().split()))

lis.sort()

# 중앙값 구하기

lens = len(lis)
mid = (lens - 1) // 2

print(lis[mid])

