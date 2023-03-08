let library = [
  {
    title: 'Head First Javascript',
    author: 'Eric Freeman',
    pages: '700',
    read: true
  },
];


const form = document.querySelector('.form');
const title = form.querySelector('#title');
const author = form.querySelector('#author');
const pages = form.querySelector('#pages');
const submit = document.querySelector('[type="submit"]');
const displayForm = document.querySelector('#button');
const checkbox = document.querySelector('.form-checkbox');


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
    // const isChecked = book.isChecked ? 'checked' : '';
    const bookEl = document.createElement('div');
    bookEl.innerHTML = `
      <div class='card'>
      <span class='bar'></span>
        <p>Title: ${book.title}</p>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <button class='remove' onclick='removeBookFromLibrary(${i})'>Remove Book</button>
        <input type="checkbox" class="checkbox" ${book.read ? 'checked' : ''}/><label for="checkbox">Read</label>
      </div>
    `;
    wrapper.appendChild(bookEl);
  }
}


function getReadValue() {
  return checkbox.checked;
}



function removeBookFromLibrary(index) {
  library.splice(index, 1);
  displayBooks();
}

// ! BUG:
// TODO: When checking the checkbox on the dropdown form
// todo: and submitting:
// todo: All checkboxes on cards become checked.

/*

Chat GPT Suggests (7 Mar 2023)

Use ES6 syntax: Instead of using function constructors, consider using classes to create Book objects. This would make your code more readable and easier to maintain.

Use event delegation: Instead of adding a click event listener to each book's remove button, consider using event delegation. This would attach the event listener to the container element and listen for events bubbling up from the remove button. This would make your code more efficient and prevent memory leaks.

Add persistence: Currently, if the user refreshes the page, all of their library data will be lost. Consider using local storage or a database to persist the data. This would provide a better user experience and make your app more robust.

Improve checkbox functionality: Currently, your code is not updating the read status of books correctly. Consider adding a method to update the read status of a book and attaching it to the onchange event of the checkbox. This would make your app more user-friendly and prevent bugs.

Add error handling: Currently, your code does not handle errors well. Consider adding error handling for user input and other potential errors. This would make your app more reliable and prevent crashes.

*/
