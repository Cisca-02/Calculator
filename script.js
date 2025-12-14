//----BUSINESS LOGIC---

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

        case "+":
            return add(num1, num2);

        case "-":
            return sub(num1, num2);

        case "X":
            return multiply(num1, num2);

        case "/":
            return divide(num1, num2);
    }
}

//----MEMORIA CALCULATOR----
let num1 = "";
let num2 = "";
let op = "";


//----DOM MANIPULATION----
//In questa sezione inseriamo il codice che permette di modificare elementi del DOM a partire da input dati dall'utente
//come ad esempio il caso di digitare dei bottoni

//OBIETTIVO: quando l'utente digita dei numeri, questi vengono proiettati sul display

//Funzione: prende in input un numero e lo aggiunge al paragrafo del display
const showOnDisplay = n => {
    //seleziono il paragrafo del display
    const display = document.querySelector(".display-para");

    //aggiungo l'elemento n al content del display
    display.textContent += n;
} 

//Aggiungo un listener ai button di tipo number, cosi che quando vengono digitati, chiamo la funzione showOnDisplay
//Seleziono tutti i buttons di classe ".number" e aggiungo un listener a ognuno
const numbers = document.querySelectorAll(".number");
numbers.forEach(num => num.addEventListener("click", () => {
    num1 += num.textContent;
    showOnDisplay(num.textContent);
}));

