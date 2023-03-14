const container = document.querySelector('.container');


function displayContact() {
  const card = document.createElement('div');
  card.setAttribute('class', 'card')
  const content = document.createElement('main');
  content.setAttribute('class', 'content');
  card.innerHTML = '<h3>Contact</h4>';
  container.appendChild(content);
  return content.appendChild(card);
}

export { displayContact };