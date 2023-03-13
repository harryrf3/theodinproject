const container = document.querySelector('.container');
function displayHomeHeader() {
  const header = document.createElement('header');
  header.innerHTML = '<header class="header"><h3>Taco Bar</h3></header>';
  container.appendChild(header);
}

function displayHomeNav() {
  const nav = ['Home', 'Menu', 'Contact'];
  // const container = document.querySelector('.container');
  const li = document.createElement('li');
  li.setAttribute('class', 'sidebar')
  nav.forEach(item => {
    const a = document.createElement('a');
    a.textContent = item;
    li.appendChild(a);
  });
  return container.appendChild(li);
}

function displayHomeContent() {
  const content = document.createElement('main');
  content.setAttribute('class', 'content')
  content.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sapiente praesentium facere culpa et,';
  container.appendChild(content)
}

export { displayHomeHeader, displayHomeNav, displayHomeContent };