from sys import argv, exit

if len(argv) < 2:
  print('missing command line arguments')
  exit(1)
print("these are command line arguments", end = ": ")
for arg in argv:
  print(arg, end=" - ")
print()
exit(0) # for sucess


# RUN >  python3 commandLineArguments.py foor bar baz in command line