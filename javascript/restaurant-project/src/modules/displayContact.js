const container = document.querySelector('.container');


function displayContact() {
  const card = document.createElement('div');
  card.setAttribute('class', 'card');
  const content = document.createElement('main');
  content.setAttribute('class', 'content');
  card.innerHTML =
    `
  <h4>
    Phone:<br/>
    (555) 555-1234
  </h4>
  <h4>
    Address:<br/>
    123 Taco Lane, Taco City, Pa</h4>
  <h4>
  Hours:<br/>
    Mon - Friday: 10am to 10pm<br/>
    Sat - Sun: 12pm to 10pm
  </h4>`;
  container.appendChild(content);
  return content.appendChild(card);
}

export { displayContact };