import myName from './myName.js'


function component() {
  const element = document.createElement('div');

  element.textContent = myName('Harry');

  return element;
}

document.body.appendChild(component());