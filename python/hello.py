x = 2
y = 5
s = 'yeS'
# use python3 hello.py to run
print(f"hello, {x}")

if x>y:
  print('hi')
elif True:
  print('bye')
else: 
  print('i dont know')

counter = 3
while counter > 0:
  print("cough")
  counter -= 1

for i in range(3):
  print("cough again")

for i in [0,1,5]:
  print(f"hoy, {i}")

if x == 2 or x == 3:
  print('x is 2 or 3')

if x in [2, 3]:
  print('x is 2 or 3')

if s.lower() in ['yes', 'y']:
  print('s is yes')


def swap(a, b):
  print(f'original a-b: {a} - {b}')
  a,b = b,a
  print(f'swaped a-b: {a} - {b}')

swap(1,2)