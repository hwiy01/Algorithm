# fib(n) = fib(n-1) + fib(n-2)이기 때문에
# 피보나치값처럼 1과 0호출 횟수도 누적되어서 다음 값에 영향 줌
# 1과 0호출 횟수도 초기에 미리 정의 후 이를 더해가는 식으로..
# 이전 값들을 저장해가며 큰 값으로..~

n = int(input())

def fib(n):
    # 각각 fib(0), fib(1), fib(2) 일 때 호출 횟수
    # zeros와 ones를 전역으로 했더니 오류...
    zeros = [1, 0, 1]
    ones = [0, 1, 1]
    if n >= 3:
        for i in range(3, n+1):
            zeros.append(zeros[i-1] + zeros[i-2])
            ones.append(ones[i-1] + ones[i-2])
    print(f"{zeros[n]} {ones[n]}")

for _ in range(n):
    m = int(input())
    fib(m)
  