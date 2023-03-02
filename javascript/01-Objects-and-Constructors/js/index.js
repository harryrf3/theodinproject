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
  const p = document.createElement('p')
  p.textContent = library;
  // p.textContent = author.value;
  p.style.color = 'black'
  document.body.appendChild(p)
  const div = document.createElement('div')
}


// function removeBookFromLibrary() {
  
// }

