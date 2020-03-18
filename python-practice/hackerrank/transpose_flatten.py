import numpy
n, m = list(map(int, input().split()))
a = []
for i in range(n):
    row = list(map(int, input().split()))
    a.append(row)
print(numpy.transpose(a))
print(numpy.array(a).flatten())
