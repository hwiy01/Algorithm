# 브루트포스 

n = int(input())

board = []

# 연속된 것 개수세는 함수
def check(newBoard):
    max_cnt = 0

    # 가로로 세기
    for i in range(n):
        cnt = 1
        for j in range(0, n - 1): 
            if(newBoard[i][j] == newBoard[i][j + 1]):
                cnt += 1
            else: 
                max_cnt = max(max_cnt, cnt)
                cnt = 1

        max_cnt = max(max_cnt, cnt)

    # 세로로 세기
    for i in range(n):
        cnt = 1
        for j in range(0, n - 1): 
            if(newBoard[j][i] == newBoard[j + 1][i]):
                cnt += 1
            else: 
                max_cnt = max(max_cnt, cnt)
                cnt = 1

        max_cnt = max(max_cnt, cnt)

    return(max_cnt)


dx = [-1, 1, 0, 0]
dy = [0, 0, 1, -1]

max_answer = 0

for _ in range(n):
    line = list(input())
    board.append(line)

for col in range(n):
    for row in range(n):

        for i in range(4):
            y = col + dy[i]
            x = row + dx[i]

            # 상하좌우와 다른 것 모두 조사하여, swap
            # swap 후 연속된 것 개수세기
            if(0 <= x < n and 0 <= y < n and board[col][row] != board[y][x]):
                board[col][row], board[y][x] = board[y][x], board[col][row]

                # 최대 연속 개수 갱신
                max_answer = max(max_answer, check(board))

                # 다시 원래대로 교환
                board[col][row], board[y][x] = board[y][x], board[col][row]


print(max_answer)

