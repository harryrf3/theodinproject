const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');
const clear = document.querySelector('#clear');


let calculation = [];


buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.id === 'clear') return;
    operate(button);
    updateDisplay(button);
  });
});


clear.addEventListener('click', clearDisplay);


function updateDisplay(button) {
  calculation.push(button.textContent);
  display.textContent = calculation.join('');
};


function clearDisplay() {
  calculation = [];
  display.textContent = calculation.join('');
};


function add(num1, num2) {
  return num1 + num2;
}


function subtract(num1, num2) {
  return num1 - num2;
}


function multiply(num1, num2) {
  return num1 * num2;
}


function divide(num1, num2) {
  return num1 / num2;
}


function operate(button) {
  console.log(button.textContent);
}