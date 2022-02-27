// // Exercise 5
// //  I create the Printer class
// class Printer {
//     // Create the constructor and assign it's properties
//     constructor(myPinter,){
//         this.myPinter = myPinter;
//     }

//     //Create the printerTest method
//     printerTest(){
//         return `Hola usuario, esta es la impresora ${this.myPinter}`
//     }
// }

// // Create 'school25' as an instance of the Printer class
// let school25 = new Printer('ImpresoraEscuela25');

// // Call the 'printerTest' method and store the result in the variable 'testResult'
// let testResult = school25.printerTest();

// //Print 'testResult'
// console.log(testResult);

//Exercise 6

class Printer {
    constructor(myPinter){
        this.myPinter = myPinter;
        this._model = 'TX-200';
    }

    printerTest(){
        return `Hola usuario, esta es la impresora ${this.myPinter}`
    }

    getModel() {
        return console.log(`The model of the printer is: ${this._model}`)
    }
}

let school25 = new Printer('ImpresoraEscuela25');

let testResult = school25.printerTest();

console.log(testResult);
school25.getModel();



