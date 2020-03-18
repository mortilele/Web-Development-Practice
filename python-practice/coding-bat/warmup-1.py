def sleep_in(weekday, vacation):
  return not weekday or vacation

def diff21(n):
  return (n - 21) * 2 if n > 21 else 21 - n

def parrot_trouble(talking, hour):
  return talking and hour not in range(7, 21)

def makes10(a, b):
  return a==10 or b==10 or a+b==10

def near_hundred(n):
  return (n + 10 >= 100 and n <= 110) or (n + 10 >= 200 and n <= 210)

def pos_neg(a, b, negative):
  return (a > 0 and b < 0) or (a < 0 and b > 0) if not negative else a < 0 and b < 0 

def not_string(str):
  f = str.split()[0]
  if f=='not':
    return str
  else:
    return 'not ' + str

def missing_char(str, n):
    return str[:n] + str[n+1:]

def front_back(str):
  if len(str)==1:
    return str
  return str[-1:] + str[1:-1] + str[:1]

def front3(str):
  if len(str)>=3:
    return str[0:3] * 3
  else:
    return str[0:] * 3

def monkey_trouble(a_smile, b_smile):
  return a_smile == b_smile

def sum_double(a, b):
  return a + b if a != b else (a+b) * 2

