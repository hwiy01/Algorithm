# queue

from collections import deque
import sys

t = int(sys.stdin.readline().strip())

results = [] 

for _ in range(t):
    n, m = map(int, sys.stdin.readline().strip().split())
    # (값, 인덱스) 형식으로, deque 리스트로 만듦
    queue = deque((int(priority), idx) for idx, priority in enumerate(sys.stdin.readline().strip().split()))

    cnt = 0  

    while queue:
        # popleft를 통해 먼저 꺼내서 우선순위 가장 높은지 확인, m과 비교하는 식으로..
        max_val = max(queue, key=lambda x: x[0])[0]  
        priority, idx = queue.popleft()

        if priority == max_val:  
            cnt += 1 
            if idx == m:  # 꺼낸 문서가 궁금한 문서라면
                results.append(cnt)  
                # 결과 리스트에 현재 인쇄된 문서 수 추가
                break  
        else:
            queue.append((priority, idx))  
            # 우선순위가 가장 높지 않으면 문서를 다시 큐의 끝에 추가

for result in results:
    print(result)


    