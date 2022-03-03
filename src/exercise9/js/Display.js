class Display {
    constructor(displayFirstValue, displaySecondValue) {
        this.displayFirstValue = displayFirstValue;
        this.displaySecondValue = displaySecondValue;
        this.calculator = new Calculator();
        this.typeOperation = undefined;
        this.firstValue = '';
        this.secondValue = '';
    }

    delateDisplay() {
        this.firstValue = '';
        this.secondValue = '';
        this.typeOperation = undefined;
        this.printValue();
    }

    inputValue(number) {
        this.firstValue += number;
        this.printValue();
    }

    printValue() {
        this.displayFirstValue.textContent = this.firstValue;
        this.displaySecondValue.textContent = this.secondValue;
    }

    calculate() {
        if( isNaN(this.firstValue) || isNaN(this.secondValue)) return
        this.firstValue = this.calculator[this.typeOperation](this.firstValue, this.secondValue);
    }

    resolve(type) {
        this.typeOperation != 'equal' && this.calculate();
        this.typeOperation = tipo;
        this.secondValue = this.firstValue || this.secondValue;
        this.firstValue = '';
        this.printValue();
    }
}