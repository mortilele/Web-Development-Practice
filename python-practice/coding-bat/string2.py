def double_char(str):
  return ''.join([x * 2 for x in str])

def count_hi(str):
  return sum([1 for i in range(len(str)-1) if str[i:i+2] == 'hi'])
  
def cat_dog(str):
  return str.count('cat') == str.count('dog')

def count_code(str):
	return sum([1 for i in range(len(str)-3) if str[i:i+2] == 'co' and str[i+3] == 'e'])

def end_other(a, b):
  	return a.lower().endswith(b.lower()) or b.lower().endswith(a.lower())


def xyz_there(str):
	return sum([1 for i in range(1, len('#' + str)-2) if ('#'+str)[i:i+3] == 'xyz' and ('#'+str)[i-1] != '.']) > 0