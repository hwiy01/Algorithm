# 1018 / 실버 4 / 체스판 다시 칠하기

n, m = map(int, input().split())
# n : 행 수, m : 열 수
board = []
for _ in range(n):
    board.append(list(input()))  

def paint_black(temp):
    n = 2 # 엇갈리게 색칠하도록 하기 위함.
    cnt = 0

    for i in range(0, 8):
        for j in range(0, 8):
            if (n % 2 == 0):
                # 임의의 수 n이 짝수인 경우
                # 검은 색으로 칠하기
                if (temp[i][j] == 'W'):
                    cnt = cnt + 1
                n = n + 1    
            else:   
                # 임의의 수 n이 홀수인 경우
                # 하얀색으로 칠하기
                if (temp[i][j] == 'B'):
                    cnt = cnt + 1
                n = n - 1  
        n = n + 1
    return cnt

def paint_white(temp):
    n = 2 # 엇갈리게 색칠하도록 하기 위함.
    cnt = 0

    for i in range(0, 8):
        for j in range(0, 8):
            if (n % 2 == 0):
                # 임의의 수 n이 짝수인 경우
                # 하얀색으로 칠하기
                if (temp[i][j] == 'B'):
                    cnt = cnt + 1
                n = n + 1    
            else:   
                # 임의의 수 n이 홀수인 경우
                # 검은색으로 칠하기
                if (temp[i][j] == 'W'):
                    cnt = cnt + 1
                n = n - 1  
        n = n + 1
    return cnt

result = []

x = n - 8 + 1
y = m - 8 + 1

for i in range(0, x):
    for j in range(0, y):
        tempBoard = [row[j : j + 8] for row in board[i : i + 8]] 
        # board[i : i + 8, j : j + 8]
        cnts = paint_black(tempBoard)
        cnts2 = paint_white(tempBoard)
        result.append(cnts)
        result.append(cnts2)

print(min(result))