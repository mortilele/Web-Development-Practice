n = int(input())
f = dict()
for _ in range(n):
    txt = input()
    f[txt] = f.get(txt, 0) + 1

print(len(f))
for val in f.values():
    print(val, end = " ")
