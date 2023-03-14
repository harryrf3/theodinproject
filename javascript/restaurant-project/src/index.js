import { displayHome } from './home.js';
import { displayMenu } from './displayMenu.js';
import { displayHeader } from './displayHeader.js';
import { displayNav } from './displayNav.js';
import { clearDisplay } from './clearDisplay.js';
import './style.css';

displayHeader();
displayNav();
displayHome();

console.log('hello from index.js');

const Menu = document.querySelector('.Menu');
const Home = document.querySelector('.Home')
const Contact = document.querySelector('.Contact')

Menu.addEventListener('click', () => {
  clearDisplay();
  displayMenu();
});


Home.addEventListener('click', () => {
  clearDisplay();
  displayHome();
});


Contact.addEventListener('click', () => {
  clearDisplay();
  displayContact();
});


// TODO: displayMenu, displayContact


// TODO: Save for later for changing pages in nav
// const button = document.querySelector('test-button')
// button.addEventListener('click', () => {
//   helloFromModule();
// })

