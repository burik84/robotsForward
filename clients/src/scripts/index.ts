import { insertHTML, warning } from './services/insertHTML';
import { SHOWWARNING } from './services/service';
import '../styles/styles.scss';

console.log('Hello World!');
insertHTML();

const header = document.querySelector('#header .container');
if (SHOWWARNING)header.insertAdjacentHTML('afterbegin', warning);
