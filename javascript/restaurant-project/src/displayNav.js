const container = document.querySelector('.container');


function displayNav() {
  const nav = ['Home', 'Menu', 'Contact'];
  const li = document.createElement('li');
  li.setAttribute('class', 'navbar');
  nav.forEach(item => {
    const a = document.createElement('a');
    a.textContent = item;
    li.appendChild(a);
  });
  return container.appendChild(li);
}

export { displayNav }