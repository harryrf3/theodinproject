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
const button = document.querySelector('#button');


function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}


function addBookToLibrary() {
  let inputTitle = title.value;
  let inputAuthor = author.value;
  let inputPages = pages.value;
  // let inputRead = getReadValue();
  let newBook = new Book(inputTitle, inputAuthor, inputPages);
  library.push(newBook);
}


button.addEventListener('click', (e) => {
  e.preventDefault();
  addBookToLibrary();
  displayBooks();
  form.reset();
});

function displayBooks() {
  return `
  <div class='display'>
    <p>Title: ${title.value}
  </div>
  `
}


// function removeBookFromLibrary() {
  
// }

