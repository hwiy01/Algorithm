import sys

n = int(sys.stdin.readline())

lis = []

total = 0
dic = dict()

for _ in range(n):
    num = int(sys.stdin.readline())
    lis.append(num)
    total += num

    # 최빈값 구하기 위한 딕셔너리
    if num in dic:
        dic[num] = dic[num] + 1
    else:
        dic[num] = 1

# 산술 평균
mean = int(round(total / n , 0))

# 중앙값
lis.sort()
mididx = n // 2 
mid = lis[mididx]

# 최빈값
# 최빈값들만 따로 리스트로 모아서..
freqLis = []
freqVal = max(dic.values())

for key in dic:
    if dic[key] == freqVal:
        freqLis.append(key)

freqLis.sort()

#if 문 간단히 쓰는법
freq = freqLis[0] if len(freqLis) == 1 else freqLis[1]


# 범위
rang = max(lis) - min(lis)

print(mean)
print(mid)
print(freq)
print(rang)