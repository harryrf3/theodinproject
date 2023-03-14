import { displayHomeNav, displayHomeContent } from './home.js';

import { displayHeader } from './displayHeader.js';
import { displayNav } from './displayNav.js';
import './style.css';

console.log('hello from index.js');


displayHeader();
displayNav();
displayHomeContent();


// TODO: Save for later for changing pages in nav
// const button = document.querySelector('test-button')
// button.addEventListener('click', () => {
//   helloFromModule();
// })

