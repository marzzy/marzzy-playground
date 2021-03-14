def main():
  aggrement()
  ageCalc()

def aggrement():
  ans = input('Do you agree? \n')

  if ans.lower() in ['yes', 'yep', 'y']:
    print('you are agreed' , end='\n \n')
  else:
    print("why not???")

def ageCalc():
  ans = int(input('how old are you? \n'))

  print(f"you have at least {ans * 365} days old")

main()