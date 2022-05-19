import { insertHTML } from './services/insertHTML';
import { modalStart } from './components/bootstrap';
import '../styles/pages/error.scss';

console.log('page not found');

insertHTML('error');

document.addEventListener('DOMContentLoaded', () => {
  modalStart();
});