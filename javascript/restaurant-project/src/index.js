import { displayHome } from './modules/displayHome.js';
import { displayMenu } from './modules/displayMenu.js';
import { displayContact } from './modules/displayContact.js';
import { displayHeader } from './modules/displayHeader.js';
import { displayNav } from './modules/displayNav.js';
import { clearDisplay } from './modules/clearDisplay.js';
import './style.css';


displayHeader();
displayNav();
displayHome();


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

