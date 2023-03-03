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
  form.style.display = 'grid';
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
        <p>Title: ${book.title}</p>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <button class='remove' onclick='removeBookFromLibrary(${i})'>Remove Book</button>
      </div>
    `;
    wrapper.appendChild(bookEl);
  }
}

function removeBookFromLibrary(index) {
  library.splice(index, 1);
  displayBooks();
}






// You can append to elements that aren't in the DOM yet just like you normally would. 
// Then, when you're ready to append that element that's in memory to the page- just append it to any element that's already on the page!