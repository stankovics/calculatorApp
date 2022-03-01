export const chooseOperation = function (operation) {
  if (this.currentOperand === ' ') return;
  this.operation = operation;
  this.previousOperand = this.currentOperand;
  this.currentOperand = '';
  if (this.previousOperand !== '') {
    this.compute();
  }
};
export const compute = function () {
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
};
