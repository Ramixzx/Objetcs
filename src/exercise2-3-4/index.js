// Exercise 2
class Persona {

};

//-------------------------------------------------------------------------------------------------->

// Exercise 3

// class Person {
//     constructor(){
//         this.name = 'Bob';
//         this.lastName = 'Dylan';
//         this.birthDate = 'May 24, 1941';
//     }
// }

// let personX = new Person;

//-------------------------------------------------------------------------------------------------->

// Exercise 4
class Person {
    constructor(name, lastName, birthDate){
        this.name = name;
        this.lastName = lastName;
        this.birthDate = birthDate;
    }
}

let valerio = new Person('Valerio', 'Sti', 'Jun 18, 1998');

console.log(valerio)
