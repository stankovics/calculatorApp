import 'core-js/stable';

const parentElement = document.querySelector('.calculator-grid');
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelector('[data-equal]');
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
    if (number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
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
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = '';
  }
  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = '';
    } else {
      integerDisplay = integerDigits.toLocaleString('en', {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }
  updateDisplay() {
    this.currentOperandTextElement.innerText = this.getDisplayNumber(
      this.currentOperand
    );
    if (this.operation != null) {
      this.previousOperandTextElement.innerText = `${
        (this, this.getDisplayNumber(this.previousOperand))
      } ${this.operation}`;
    } else {
      this.previousOperandTextElement.innerText = '';
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
equalButton.addEventListener('click', function () {
  calculator.compute();
  calculator.updateDisplay();
});
