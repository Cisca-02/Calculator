//Function that adds two numbers
const add = (a, b) => a + b;

//Function that subtract two numbers
const sub = (a,b) => a - b;

//Function that multiply two numbers
const multiply = (a,b) => a * b; 

//Function that divide two numbers
const divide = (a,b) => a / b;


//Function that do calculator's operations
const operate = (num1, num2, operation) => {
    switch (operation){
        //add
        case "+":
            console.log(add(num1, num2));
            break;

        case "-":
            console.log(sub(num1, num2));
            break;

        case "*":
            console.log(multiply(num1, num2));
            break;

        case "/":
            console.log(divide(num1, num2));
            break;
    }
}