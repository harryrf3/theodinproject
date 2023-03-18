const container = document.querySelector('.container');

function displayAside() {
  const aside = document.createElement('aside');
  aside.setAttribute('class', 'aside')
  container.appendChild(aside);
}

export { displayAside }