const parentElement = document.querySelector('.calculator-grid');
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelectorAll('[data-equal]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector(
  '[data-previous-operand]'
);
const currentOperandTextElement = document.querySelector(
  '[data-current-operand]'
);

class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }
  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  }
  delete() {}
  appendNumber(number) {
    this.currentOperand = number;
  }
  chooseOperation(operation) {
    if (this.currentOperand === ' ') return;
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
    if (this.previousOperand !== '') {
      this.compute();
    }
  }
  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case '*':
        computation = prev * current;
        break;
      case '÷':
        computation = prev / current;
        break;
      default:
        return;
    }
  }
  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand;
    if (this.operation != null) {
      this.previousOperandTextElement.innerText = this.operation;
    }
  }
}
const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

parentElement.addEventListener('click', function (e) {
  if (e.target.closest('[data-number]')) {
    const btnNum = e.target.closest('[data-number]');
    const selectedNumber = btnNum.getAttribute('data-number');
    calculator.appendNumber(selectedNumber);
    calculator.updateDisplay();
  }
  if (e.target.closest('[data-operation]')) {
    const btnOperation = e.target.closest('[data-operation]');
    const selectedOperation = btnOperation.getAttribute('data-operation');
    calculator.chooseOperation(selectedOperation);
    calculator.updateDisplay();
  }
});
//Separate logic for event delegation logic for operation
//parentElement.addEventListener('click', function (e) {
//  const btn = e.target.closest('[data-operation]');
//  const selectedOperation = btn.getAttribute('data-operation');
//  console.log(selectedOperation);
//});
