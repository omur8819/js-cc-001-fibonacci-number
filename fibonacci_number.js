document.getElementById("button_1").addEventListener("click", check)
function check () 
{
    const number = document.getElementById("try").value;
    if (number !== "") 
    {
        if (number > 0) 
        {
        let fibonacciArray = []
        for (let i = 0; i < parseInt(number)+1; i++) 
        {
            if (fibonacciArray.length === 0) 
            {
                fibonacciArray[i] = 0;
            }
            else if (fibonacciArray.length === 1) 
            {
                fibonacciArray[i] = 1;
            }
            else 
            {
                fibonacciArray[i] = fibonacciArray[i-1] + fibonacciArray[i-2];
            }
        }
        let result = fibonacciArray[fibonacciArray.length-1];
        document.getElementById("result_fibonacci").innerHTML = "The " + number + " th fibonacci number in fibonacci serie is " + result;
        }   
        else 
        {
        document.getElementById("result_fibonacci").innerHTML = "Please enter positive integer number!";
        }
    } 
    else 
    {
        document.getElementById("result_fibonacci").innerHTML = "You must enter a number!";
    }
}
function reset()
{
    document.getElementById('fibonacci_number').value = "";
}