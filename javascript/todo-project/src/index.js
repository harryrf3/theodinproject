console.log('hello from index.js');

import { createTodo } from './modules/createTodo.js';
import { displayHeader } from './modules/displayHeader.js';
import { displayAside } from './modules/displayAside.js';
import { displayMain } from './modules/displayMain.js';
import './style.css';

displayHeader();
displayAside();
displayMain();

createTodo();