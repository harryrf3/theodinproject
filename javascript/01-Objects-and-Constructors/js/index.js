let library = [
  {
    title: 'Head First Javascript',
    author: 'Eric Freeman',
    pages: '700',
    read: false
  },
];


const form = document.querySelector('.form');
const title = form.querySelector('#title');
const author = form.querySelector('#author');
const pages = form.querySelector('#pages');
const submit = document.querySelector('[type="submit"]');
const displayForm = document.querySelector('#button')


function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}


function addBookToLibrary() {
  const inputTitle = title.value;
  const inputAuthor = author.value;
  const inputPages = pages.value;
  // let inputRead = getReadValue();
  const newBook = new Book(inputTitle, inputAuthor, inputPages);
  library.push(newBook);
}


displayForm.addEventListener('click', () => {
  form.style.display = 'grid'
})


submit.addEventListener('click', (e) => {
  e.preventDefault();
  addBookToLibrary();
  displayBooks();
  form.reset();
});


function displayBooks() {
  const pTitle = document.createElement('p');
  const pAuthor = document.createElement('p');
  const pPages = document.createElement('p');
  pTitle.textContent = title.value;
  pAuthor.textContent = author.value; 
  pPages.textContent = pages.value;
  const container = document.createElement('div');
  container.innerHTML = `
  <div class=card>
    <p>Title: ${title.value}</p>
    <p>Author: ${author.value}</p>
    <p>Pages: ${pages.value}</p>
  </div>
  `;
  // container.append(pTitle, pAuthor, pPages)
  document.body.append(container)
}

// function removeBookFromLibrary() {
  
// }






// You can append to elements that aren't in the DOM yet just like you normally would. 
// Then, when you're ready to append that element that's in memory to the page- just append it to any element that's already on the page!