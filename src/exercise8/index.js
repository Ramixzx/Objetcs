// Code extracted from class 6
class Person {
    constructor(name, lastName, birthDate){
        this.name = name;
        this.lastName = lastName;
        this.birthDate = birthDate;
    }

    //Returns the current age of the person
    getAge() {
        //Current date
        let dateNow = new Date();
        let currentYear = parseInt(dateNow.getFullYear());
        let currentDay = parseInt(dateNow.getDate());
        let currentMonth = parseInt(dateNow.getMonth()) + 1;
        
        //Birth date
        let birthYear = parseInt(String(this.birthDate).substring(6,10));
        let birthDay = parseInt(String(this.birthDate).substring(3,5));
        let birthMonth = parseInt(String(this.birthDate).substring(0,3));
        
        let age = currentYear - birthYear;

        //Conditional. If the birthday date has not yet passed, it returns the appropriate value.
        if(currentMonth < birthMonth && age !== 0) {
                age--;
        } else {
            if(currentDay < birthDay && age !== 0) {
                    age--;    
            }
        }

        //Save the age as a property of the class
        this.age = age;

        console.log(`Your age is: ${age}`)
    }

    canDrinkAlcohol() {
        //If the Person is over 21 true else false
        this.age >= 21 ? console.log(true) : console.log(false);


        //Same result, more produced.

        // if(this.age >= 21) {
        //     console.log(`${this.name} is over 21. Can drink alcohol`)
        // } else {
        //     console.log(`${this.name} is not older than 21. Cannot drink alcohol`)
        // }
    }
}


//Test characters

let valerio = new Person('Valerio', 'Sti', '06/18/1998');
let uriel = new Person('Uriel', 'Doval', '11/01/2000');
let sara = new Person('Sara', 'Levy', '03/15/2022');
let florencia = new Person('Florencia', 'Nativ', '05/18/1997');
let bautista = new Person('Bautista', 'DeFranchesco', '08/25/2003');

console.log(valerio)
valerio.getAge()
valerio.canDrinkAlcohol()

console.log(uriel)
uriel.getAge()
uriel.canDrinkAlcohol()

console.log(sara)
sara.getAge()
sara.canDrinkAlcohol()

console.log(florencia)
florencia.getAge()
florencia.canDrinkAlcohol()

console.log(bautista)
bautista.getAge()
bautista.canDrinkAlcohol()




