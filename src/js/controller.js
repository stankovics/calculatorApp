import * as view from './view';
view.parentElement.addEventListener('click', function (e) {
  if (e.target.closest('[data-number]')) {
    const btnNum = e.target.closest('[data-number]');
    const selectedNumber = btnNum.getAttribute('data-number');
    view.calculator.appendNumber(selectedNumber);
    view.calculator.updateDisplay();
  }
  if (e.target.closest('[data-operation]')) {
    const btnOperation = e.target.closest('[data-operation]');
    const selectedOperation = btnOperation.getAttribute('data-operation');
    view.calculator.chooseOperation(selectedOperation);
    view.calculator.updateDisplay();
  }
});
//Separate logic for event delegation logic for operation
//parentElement.addEventListener('click', function (e) {
//  const btn = e.target.closest('[data-operation]');
//  const selectedOperation = btn.getAttribute('data-operation');
//  console.log(selectedOperation);
//});
view.equalButton.addEventListener('click', () => {
  view.calculator.compute();
  view.calculator.updateDisplay();
});
view.allClearButton.addEventListener('click', () => {
  view.calculator.clear();
  view.calculator.updateDisplay();
});
view.deleteButton.addEventListener('click', () => {
  view.calculator.delete();
  view.calculator.updateDisplay();
});
