import sys

n, k = map(int, sys.stdin.readline().split())
lis = []

for i in range(2, n+1):
    lis.append(i)

def est (lis):
    cnt = 0
    while(lis):
        # 가장 작은 수 지움
        p = lis[0]
        lis.remove(p)
        cnt += 1

        if(cnt == k):
            return p

        for idx in range(2, max(lis) // p + 1):
            if(p * idx in lis):
                lis.remove(p * idx)
                cnt += 1
            if(cnt == k):
                return p * idx

print(est(lis))