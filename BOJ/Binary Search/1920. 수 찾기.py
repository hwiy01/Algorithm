import sys

n = int(sys.stdin.readline())

nlis = list(map(int, sys.stdin.readline().split()))

m = int(sys.stdin.readline())

mlis = list(map(int, sys.stdin.readline().split()))

nlis.sort()

def binary_search(start, end, target, arr):
    while(start <= end):
        mid = (start + end) // 2

        if arr[mid] == target:
            return(1)
        
        elif arr[mid] < target:
            start = mid + 1

        else:
            end = mid - 1
    
    return(0)

for num in mlis:
    print(binary_search(0, len(nlis) - 1, num, nlis))