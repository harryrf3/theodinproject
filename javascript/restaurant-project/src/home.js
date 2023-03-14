const container = document.querySelector('.container');


function displayHomeContent() {
  const card = document.createElement('div');
  card.setAttribute('class', 'card')
  const content = document.createElement('main');
  content.setAttribute('class', 'content');
  card.innerHTML = '<h3>The best tacos on the internet!</h3><br/> <h4>You can\'t eat them, but you can stare til your heart\'s content.</h4>';
  container.appendChild(content);
  return content.appendChild(card);
}

export { displayHomeContent };