// import 'bootstrap';
import { insertHTML, warning } from './services/insertHTML';
import { SHOWWARNING } from './services/service';
import bootstrapStart from './components/bootstrap';
import scrollUp from './components/scrollUp';
import '../styles/pages/styles.scss';

insertHTML('main');

const header = document.querySelector('#header .container');
if (SHOWWARNING)header.insertAdjacentHTML('afterbegin', warning);

document.addEventListener('DOMContentLoaded', () => {
  bootstrapStart();
  scrollUp();
});
