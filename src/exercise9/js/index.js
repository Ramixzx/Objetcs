let displayFirstValue = document.querySelector('#displayFirstValue');
let displaySecondValue = document.querySelector('#displaySecondValue')
let buttonsNumbers = document.querySelectorAll('.number');
let buttonsOperators = document.querySelectorAll('.operator')
let specialOperator = document.querySelectorAll('.specialOperator')

const display = new Display(displayFirstValue, displaySecondValue);

buttonsNumbers.forEach(button => {
    button.addEventListener('click', () => display.inputValue(button.innerHTML));
})

buttonsOperators.forEach(button => {
    button.addEventListener('click', () => display.resolve(button.value));
})
