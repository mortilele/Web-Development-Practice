import numpy
n, m, p = list(map(int, input().split()))
a, b = [], []
for i in range(n):
    row = list(map(int, input().split()))
    a.append(row)

for j in range(m):
    row = list(map(int, input().split()))
    b.append(row)

a = numpy.array(a)
b = numpy.array(b)
print(numpy.concatenate((a,b), axis=0))