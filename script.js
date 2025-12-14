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
let tempNum = "";
let num1 = "";
let num2 = "";
let op = "";
let resultDisplayed = false;



//----FUNZIONI DI UTILITA'----

//Funzione: stampa un errore
const printError = () => {
    if(num1 == ""){
        return;
    }else{
        num1 = "";
        showOnDisplay("ERROR");
        resultDisplayed = true;
    }
}

//Funzione: stampa risultato
const printResult = () => {
    num2 = parseFloat(tempNum);
    
    //pulisco lo schermo
    tempNum = "";
    showOnDisplay("");

    //operate()
    let result = operate(num1, num2, op);
    showOnDisplay(result);
    tempNum = result;
    num1 = "";
    num2 = "";
    op = "";
    return result;
}






//----DOM MANIPULATION----
//In questa sezione inseriamo il codice che permette di modificare elementi del DOM a partire da input dati dall'utente
//come ad esempio il caso di digitare dei bottoni


//------------------------------------------------------------------------------------------
//OBIETTIVO: quando l'utente digita dei numeri, questi vengono proiettati sul display

//Funzione: prende in input un numero e lo aggiunge al paragrafo del display
const appendOnDisplay = n => {
    //seleziono il paragrafo del display
    const display = document.querySelector(".display-para");

    //aggiungo l'elemento n al content del display
    display.textContent += n;
} 

//Funzione: stampa l'input sul display
const showOnDisplay = n => {
    const display = document.querySelector(".display-para");
    display.textContent = n;
}

//Aggiungo un listener ai button di tipo number, cosi che quando vengono digitati, chiamo la funzione showOnDisplay
//Seleziono tutti i buttons di classe ".number" e aggiungo un listener a ognuno
const numbers = document.querySelectorAll(".number");
numbers.forEach(num => num.addEventListener("click", () => {
    //se è stato stampato un risultato, allora quando digito il numero, voglio che lo schermo venga pulito 
    if(resultDisplayed){
        showOnDisplay("");
        resultDisplayed = false;
    }
    tempNum += num.textContent;
    appendOnDisplay(num.textContent);
}));


//----------------------------------------------------------------------------------------

//OBIETTIVO: quando l'utente digita button operation, il calculator svolge l'operazione o restituisce uno error message

//Quando schiaccio un pulsante operazione, possono verificarsi vari casi:

//CASO 1: il display (e quindi tempNum) sono vuoti (uguali a ""), dunque non ho nulla su cui fare un'operazione, il
//comportamento deve essere quello di ignorare l'operazione (se num1 è diverso da "", allora sono stati digitati
//due volte di fila pulsanti operazione -> stampo BAD FORMAT)

//CASO 2: il display contiene un numero (quindi anche tempNum) ma num1 è VUOTO, dunque posso convertire il contenuto 
// di tempNum in un numero (float), spostarlo in num1, salvo l'operazione, e infine posso pulire tempNum e display

    //CASO 2-A: viene schiacchiato nuovamente un pulsante operazione -> torno al CASO 1.

    //CASO 2-B: viene schiacciato un pulsante numerico -> viene chiamato l'eventListener numerico, che salva il
    //contenuto sul display e in tempNum.

//CASO 3: il display contiene un numero (quindi anche tempNum), ma num1 NON è vuoto. Il comportamento sarà quello
//di salvare il contenuto di tempNum in num2 -> eseguire l'operazione (num1, num2, op), stampare il risultato sul 
//display, inserire il risultato in num1, salvare l'operazione digitata, impostare la variabile resultDisplayed = true


//Aggiungo un listener ai buttons di tipo operation
const operations = document.querySelectorAll(".operation");
operations.forEach(operation => operation.addEventListener("click", () => {
    //CASO 1:
    if(tempNum == ""){
        printError();
    //CASO 2: 
    }else if(num1 === ""){
        num1 = parseFloat(tempNum);
        op = operation.textContent;
        tempNum = "";
        showOnDisplay("");
    //CASO 3:
    }else{
        //stampa risultato
        let result = printResult();

        //salvo il risultato in num1 per la prossima operazione
        tempNum = "";
        num1 = result;
        op = operation.textContent;
        resultDisplayed = true;
    }
}));

//-------------------------------------------------------------------------------------------------

//OBIETTIVO: quando l'utente digita il button result, eseguo l'op e stampo il risultato, o restituisco un error message

//Quando schiaccio il pulsante result possono verificarsi vari casi:

//CASO 1.a: quando tempNum è uguale a "" (quindi il display è vuoto) allora ignoro l'input o stampo un messaggio di errore
//in caso di bad format. NOTA BENE: questo caso è gestito dalla funzione printError()

//CASO 1.b: quando tempNum non è vuoto (neanche il display quindi), ma in num1 non è ancora stato salvato alcun parametro
//in questo caso, stampo ancora un messaggio di errore, quindi posso fondere i due casi nel primo


//CASO 2: quando num1 non è vuoto, quindi anche op non è vuoto, allora salvo il contenuto di tempNum in num2 e chiamo 
//operate(). Dopodichè stampo il risultato e lo inserisco in tempNum. 


const resultBtn = document.querySelector(".result");
resultBtn.addEventListener("click", () => {
    //CASO 1:
    if(num1 == ""){
        printError();
    }
    //CASO 2:
    else{
        //stampa risultato
        printResult();
    }
});

//--------------------------------------------------------------------------------------------------

//OBIETTIVO: quando l'utente digita il bottone AC o C (option buttons) allora chiamo la funzione clear, che resetta
//lo stato del calculator a quello iniziale, cioè tempNum, num1, num2, op vengono posti a "" cosi come il display
//che viene svuotato


//Funzione: resetta lo stato del calculator
const resetCalculator = () => {
    tempNum = "";
    num1 = "";
    num2 = "";
    op = "";
    showOnDisplay("");
}


const options = document.querySelectorAll(".option");
options.forEach(option => option.addEventListener("click", () => {
    resetCalculator();
}));