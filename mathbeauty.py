import pwn
import re
c = pwn.remote ("43.204.232.3", 2001)
question = str(c.recv())
print(question)
#nums = [int(i) for i in re.findall(r'\b\d+\b',question)]
#print(nums)
#res = str(sum(nums))
#res = res.encode()
#c.send(res)
#print(c.recv())
#print(sum(nums))

