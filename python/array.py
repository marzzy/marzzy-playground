scores = []
scores.append(20)
scores.append(19)
scores.append(17)
scores.append(20)

print(f"average: {sum(scores) / len(scores)}")

for score in scores: 
  print(score, end= ' ,')
print()


print("first score", scores[0])


a = ['foo', 'bar']
b = ['foo', 'bar']
print('a and b are the same: ', a == b)