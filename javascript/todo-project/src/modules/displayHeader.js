const container = document.querySelector('.container');
console.log('hello from displayHeader.js');

function displayHeader() {
  const header = document.createElement('header')
  header.setAttribute('class', 'header')
  container.appendChild(header)
}

export { displayHeader };