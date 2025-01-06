keyword = input().strip()

n = int(input())

dic = []

for i in range(n):
    dic.append(input())
    
result = 0
answer = ''

def delayWords(keyword, delay):
    newKeyword = ''
    for index in range(len(keyword)):
    ## 암호문 전체를 숫자로 전환하여 뒤로 미룸
        delayedNum = ord(keyword[index]) - ord('a') + delay
        delayedNum = delayedNum % 26
        newKeyword = newKeyword + chr(delayedNum + ord('a'))
    return newKeyword


## 브루트포스로 한칸씩 미뤄보며..
for delay in range(1, 26): 
    for word in dic:
        if word in answer:
            result = delay - 1
            exit
        
    answer = delayWords(keyword, delay)

print(delayWords(keyword, result))
