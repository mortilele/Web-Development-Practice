t = int(input())
for _ in range(t):
    asz = input()
    a = set(map(int, input().split()))
    bsz = input()
    b = set(map(int, input().split()))
    print(a.issubset(b))
