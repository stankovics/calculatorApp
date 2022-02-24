const numberButtons = document.querySelectorAll('');
const operationButtons = document.querySelectorAll('');
const equalButton = document.querySelectorAll('');
const deleteButton = document.querySelector('');
const allClearButton = document.querySelector('');
const previousOperandTextElement = document.querySelector('');
const currentOperandTextElement = document.querySelector('');

class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
  }
}
