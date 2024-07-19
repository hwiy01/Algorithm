import sys

n, r, c = map(int, sys.stdin.readline().split())


def Z(n, r, c):
    start = 0

    while(n > 1):
        half = (2 ** n) // 2

        if(r < half and c < half):
            pass

        elif(r < half and c >= half):
            start += half ** 2
            c -= half

        elif(r >= half and c < half):
            start += (half ** 2) * 2
            r -= half

        else:
            start += (half ** 2) * 3
            c -= half
            r -= half

        n -= 1

    return (start, r, c)

result, r2, c2 = Z(n, r, c)


if r2 == 0 and c2 == 0:
    print(result)
elif r2 == 0 and c2 == 1:
    print(result + 1)
elif r2 == 1 and c2 == 0:
    print(result + 2)
else:
    print(result + 3)
