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
const displayForm = document.querySelector('#button');
const checkbox = document.querySelector('.checkbox')


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
  const inputRead = getReadValue();
  const newBook = new Book(inputTitle, inputAuthor, inputPages, inputRead);
  library.unshift(newBook);
}


displayForm.addEventListener('click', () => {
  form.style.display = 'grid';
  displayBooks();
});


submit.addEventListener('click', (e) => {
  e.preventDefault();
  addBookToLibrary();
  displayBooks();
  form.reset();
});


function displayBooks() {
  const wrapper = document.querySelector('.card-wrapper');
  wrapper.innerHTML = '';
  for (let i = 0; i < library.length; i++) {
    const book = library[i];
    const bookEl = document.createElement('div');
    bookEl.innerHTML = `
      <div class='card'>
      <span class='bar'></span>
        <p>Title: ${book.title}</p>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <button class='remove' onclick='removeBookFromLibrary(${i})'>Remove Book</button>
        <input type="checkbox" class="checkbox" onclick="if(!checkbox.checked){getReadValue()}"/><label for="checkbox">Read</label>
      </div>
    `;
    wrapper.appendChild(bookEl);
  }
}


function getReadValue() {
  checkbox.checked = true;
}


function removeBookFromLibrary(index) {
  library.splice(index, 1);
  displayBooks();
}