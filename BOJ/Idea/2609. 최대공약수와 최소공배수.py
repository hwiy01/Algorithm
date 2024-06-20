# 유클리드 호제법
import sys

n, m= map(int, sys.stdin.readline().split())

def gcd(a, b):
    if a < b:
        a, b = b, a
    while b > 0:
        a, b = b, a % b
        # 나눈 수에 나머지를 나누는 과정 반복..
    return a

def lcm(a, b):
    return a * b // gcd(a, b)

print(gcd(n, m))
print(lcm(n, m))


