import pwn
import re
c = pwn.remote ("43.204.232.3", 2003)
question = str(c.recv())
print(question)
res = question.split()
revstr = res[-1]
res = revstr[::-1]
print(res[3:])
c.send(res[3:])
print(c.recv())
