s = input().strip()
cnt = 0
newStr = s

for i in range(0, len(s)-1):
    if(newStr[:] == newStr[::-1]):
        break
    newStr = newStr[1:]
    cnt += 1
    
print(len(s) + cnt)
    