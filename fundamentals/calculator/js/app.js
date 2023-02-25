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



const updateDisplay = (button) => {
  calculation.push(button.textContent);
  display.textContent = calculation.join('');
};


const clearDisplay = () => {
  calculation = [];
};


const add = (num1, num2) => {
  return num1 + num2;
};


const subtract = (num1, num2) => {
  return num1 - num2;
};


const multiply = (num1, num2) => {
  return num1 * num2;
};


const divide = (num1, num2) => {
  return num1 / num2;
};


const operate = (button) => {
  console.log(button.textContent);
};