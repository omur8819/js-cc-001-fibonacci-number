fibonacci = [0, 1]
for i in range(1, 100):
  fibonacci.append(fibonacci[i] + fibonacci[i - 1])
print(fibonacci)