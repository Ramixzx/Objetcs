
let displayCalculator = document.querySelector('#display')
let button1 = document.querySelector('#button-1');
let button2 = document.querySelector('#button-2');
let button3 = document.querySelector('#button-3');
let button4 = document.querySelector('#button-4');
let button5 = document.querySelector('#button-5');
let button6 = document.querySelector('#button-6');
let button7 = document.querySelector('#button-7');
let button8 = document.querySelector('#button-8');
let button9 = document.querySelector('#button-9');
let button0 = document.querySelector('#button-0');
let buttonIgual = document.querySelector('#button-igual');
let buttonMas = document.querySelector('#button-mas');
let buttonMenos = document.querySelector('#button-menos');
let buttonDivisor = document.querySelector('#button-divisor');
let buttonMultipli = document.querySelector('#button-multipli');


// class Calculator {
//     constructor() {
//     }

//     addition(num1, num2) {
//     }

//     subtraction(num1, num2) {

//     }

//     multiplication(num1, num2) {

//     }

//     division() {

//     }
// }


// const calculadora = new Calculator(num1, num2, opreracion)

// calculadora.multiplication(14, 15);


const printDisplay = (e) => {
    console.log(e.path[0].innerText);
}