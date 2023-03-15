const container = document.querySelector('.container');

const imageUrls = [
  '../src/images/anthony-espinosa-UwdSTMjnN2I-unsplash.jpg',
  '../src/images/creative-headline-R7FA5a7Itnw-unsplash.jpg',
  '../src/images/jarett-lopez-6WHl6T-fxU0-unsplash.jpg'
];

function displayMenu() {
  const card = document.createElement('div');
  card.setAttribute('class', 'card');
  const content = document.createElement('main');
  content.setAttribute('class', 'content');
  card.innerHTML = '<h3>MENU</h4>';

  imageUrls.forEach(url => {
    const image = new Image();
    image.src = url;
    image.addEventListener('load', () => {
      card.appendChild(image);
    });
  });

  content.appendChild(card);
  container.appendChild(content);
}

export { displayMenu };
