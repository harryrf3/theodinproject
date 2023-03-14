import { displayHome } from './displayHome.js';
import { displayMenu } from './displayMenu.js';
import { displayContact } from './displayContact.js';
import { displayHeader } from './displayHeader.js';
import { displayNav } from './displayNav.js';
import { clearDisplay } from './clearDisplay.js';
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

