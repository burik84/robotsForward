import 'bootstrap';
import { insertHTML, warning } from './services/insertHTML';
import { SHOWWARNING } from './services/service';
import '../styles/styles.scss';

insertHTML();

const header = document.querySelector('#header .container');
if (SHOWWARNING)header.insertAdjacentHTML('afterbegin', warning);
