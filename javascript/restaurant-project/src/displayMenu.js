const container = document.querySelector('.container');


function displayHome() {
  const card = document.createElement('div');
  card.setAttribute('class', 'card')
  const content = document.createElement('main');
  content.setAttribute('class', 'content');
  card.innerHTML = '<h3>MENU</h4>';
  container.appendChild(content);
  return content.appendChild(card);
}

export { displayHome };