import sys
n = int(input())

has = list(map(int, sys.stdin.readline().split()))

m = int(input())

cardList = list(map(int, sys.stdin.readline().split()))

result = []


# 개수를 미리 dic으로 저장해두고.. cardList 에서 존재 여부만 확인!!!
has_dic = {}

for num in has:
    if num in has_dic:
        has_dic[num] += 1
    else:
        has_dic[num] = 1

# 빠른 탐색을 위해 정렬해놓음

has_set = set(has)
has_list = list(has_set)
has_list.sort()


# cards에서 target을 찾기
def bs(cards, target, start, end) :
    mid = (start + end) // 2
    if (start > end):
        return (0)
    
    if(cards[mid] == target):
        return has_dic[target]
    
    elif (cards[mid] < target) :
        return bs(cards, target, mid+1, end)

    else:
        return bs(cards, target, start, mid-1 )
    
result = []

idx = 0
for x in cardList:
    result.append(bs(has_list, x, 0, len(has_list) - 1))
    
print(*result)
    


        
        
        
    
