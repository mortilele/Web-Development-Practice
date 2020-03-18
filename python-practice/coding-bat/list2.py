def count_evens(nums):
  	return len([x for x in nums if x % 2 == 0])

def big_diff(nums):
	return max(nums) - min(nums)

def centered_average(nums):
	return sum(sorted(nums)[1:-1]) // (len(nums)-2)

def sum13(nums):
	res, i = 0, 0

	while i < len(nums):
		if nums[i] == 13:
			i += 2
		else:
			res += nums[i]
			i += 1

	return res

def sum67(nums):
	sum, in_s = 0, False

	for x in nums:
		if x == 6:
			in_s = True
		elif x == 7:
			if in_s:
				in_s = False
			else:
				sum += x
		elif not in_s:
			sum += x

	return sum

def has22(nums):
  return sum([1 for i in range(len(nums)-1) if nums[i]==2 and nums[i+1]==2]) > 0

def xyz_there(str):
	return sum([1 for i in range(1, len('#' + str)-2) if ('#'+str)[i:i+3] == 'xyz' and ('#'+str)[i-1] != '.']) > 0