import * as model from './model';
import {
  calculator,
  parentElement,
  equalButton,
  allClearButton,
  deleteButton,
} from './view';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

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
    calculator.model.chooseOperation();
    selectedOperation;
    calculator.updateDisplay();
  }
});
//Separate logic for event delegation logic for operation
//parentElement.addEventListener('click', function (e) {
//  const btn = e.target.closest('[data-operation]');
//  const selectedOperation = btn.getAttribute('data-operation');
//  console.log(selectedOperation);
//});
equalButton.addEventListener('click', () => {
  calculator.model.compute();
  calculator.updateDisplay();
});
allClearButton.addEventListener('click', () => {
  calculator.clear();
  calculator.updateDisplay();
});
deleteButton.addEventListener('click', () => {
  calculator.delete();
  calculator.updateDisplay();
});
