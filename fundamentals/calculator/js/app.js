const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');
const clear = document.querySelector('#clear');
const equals = document.querySelector('#equals');


let calculation = [];


/* 
If a digit is clicked and the last thing in the array is a digit (as a string), 
  let's concatenate this digit onto that string.


If a digit is clicked and the last thing in the array is an operator, 
  let's push this digit in as a new thing in the array.


If an operator is clicked and the last thing in the array is an operator,
  let's replace that operator with this one.

** If an operator is clicked and the last thing in the array is a digit, 
  let's add this operator as a new thing in the array.
*/

let prev = []
let curr = []
let operator = []

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.id === 'clear') return;
    calculation.push(button.textContent);
    // console.log(calculation)
    updateDisplay(button);
  });
});


clear.addEventListener('click', clearDisplay);


function updateDisplay(button) {
  display.textContent = calculation.join('');
}


function clearDisplay() {
  calculation = [];
  display.textContent = calculation.join('');
}


function add(num1, num2) {
  return display.textContent = parseInt(num1) + parseInt(num2);
}


function subtract(num1, num2) {
  return display.textContent = parseInt(num1) - parseInt(num2);
}


function multiply(num1, num2) {
  return display.textContent = parseInt(num1) * parseInt(num2);
}


function divide(num1, num2) {
  return display.textContent = parseInt(num1) / parseInt(num2);
}


equals.addEventListener('click', () => {
  operate(calculation);
});


function operate(input) {
    if (input[1] === '+') {
      return add(input[0], input[2]);
    }
    if (input[1] === '-') {
      return subtract(input[0], input[2]);
    }
    if (input[1] === 'x') {
      return multiply(input[0], input[2]);
    }
    if (input[1] === '/') {
      return divide(input[0], input[2]);
    }
}