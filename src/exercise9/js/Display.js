class Display {
    constructor(displayFirstValue, displaySecondValue) {
        this.displayFirstValue = displayFirstValue;
        this.displaySecondValue = displaySecondValue;
        this.calculator = new Calculator();
        this.typeOperation = undefined;
        this.firstValue = '';
        this.secondValue = '';
        this.symbols = {
            addition: '+',
            subtraction: '-',
            multiply: '*',
            division: '/'
        };
    }

    delateDisplay() {
        this.firstValue = '';
        this.secondValue = '';
        this.typeOperation = undefined;
        this.printValue();
    }

    inputValue(number) {
        this.firstValue = this.firstValue.toString() + number.toString();
        this.printValue();
    }

    printValue() {
        this.displaySecondValue.textContent = this.firstValue;
        this.displayFirstValue.textContent = `${this.secondValue} ${this.symbols[this.typeOperation] || ''}` ;
    }

    calculate() {
        let firstValue = parseFloat(this.firstValue);
        let secondValue = parseFloat(this.secondValue);

        if(isNaN(firstValue) || isNaN(secondValue)) return
        this.firstValue = this.calculator[this.typeOperation](secondValue, firstValue);
    }

    resolve(type) {
        this.typeOperation !== 'equal' && this.calculate();
        this.typeOperation = type;
        this.secondValue = this.firstValue || this.secondValue;
        this.firstValue = '';
        this.printValue();
    }
}