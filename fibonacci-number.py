Fibonacci_Array = [0,1]
def fibonacci(number):
    if number <= 0:
        print("Incorrect input")
    elif number <= len(Fibonacci_Array):
        return Fibonacci_Array[number - 1]
    else:
        nth_fibonacci = fibonacci(number - 1)+fibonacci(number - 2)
        Fibonacci_Array.append(nth_fibonacci)
        return nth_fibonacci

entered_number = int(input("Please enter a positive integer number : "))
nth_fibo = fibonacci(entered_number)
print(fibonacci(entered_number))