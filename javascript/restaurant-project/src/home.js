const container = document.querySelector('.container');
function displayHomeHeader() {
  const header = document.createElement('header');
  header.setAttribute('class', 'header')
  header.innerHTML = '<h3>Taco Bar</h3>';
  return container.appendChild(header);
}

function displayHomeNav() {
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

function displayHomeContent() {
  const content = document.createElement('main');
  content.setAttribute('class', 'content');
  content.innerHTML = '<h3>The best tacos on the internet!</h3><br/> <h4>You can\'t eat them, but you can stare til your heart\'s content.</h4>';
  return container.appendChild(content);
}

export { displayHomeHeader, displayHomeNav, displayHomeContent };