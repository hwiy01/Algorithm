# just 처음값 부터 하나씩 증가시키며 답에 해당하는지 확인!
n = int(input())
cnt = 0
result = 666

while (True):
    if('666' in str(result)):
        cnt += 1
        if (cnt == n):
            break
    result += 1

print(result)