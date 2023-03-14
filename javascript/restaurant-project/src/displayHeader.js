const container = document.querySelector('.container');
function displayHeader() {
  const header = document.createElement('header');
  header.setAttribute('class', 'header')
  header.innerHTML = '<h3>Taco Bar</h3>';
  return container.appendChild(header);
}


export { displayHeader }