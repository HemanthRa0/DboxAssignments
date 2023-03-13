import pwn
import re
c = pwn.remote ("43.204.232.3", 2002)
question = str(c.recv())
print(question)
c.send("Hemanth".encode())
print(c.recv())
asciiart = c.recv().decode()
print(asciiart)
c.send(input().encode())
print(c.recv())
