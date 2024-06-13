k, n = map(int, input().split())
lis = []

for _ in range(k):
    lis.append(int(input()))

# 처음 값의 후보 범위
start = 1
end = max(lis)

# start와 end를 좁혀가며, start와 end가 엇갈리기 직전, 즉 범위길이가 0이 되기 전까지 탐색
while(start <= end):
    mid = (start + end) //2
    cnt = 0

    # 범위를 좁히기 위해, mid가 길이라고 할때 값을 확인
    for num in lis:
        cnt += num // mid
    print(cnt)

    # 최댓값을 구해야 하므로 이 범위에서 한번 더 탐색
    if cnt >= n:
        start = mid + 1

    # 구해야하는 랜선 수가 충족하지 않으므로 낮은 길이 범위에서 탐색
    else: 
        end = mid -1

print(end)