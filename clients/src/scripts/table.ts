import { insertHTML } from './services/insertHTML';
import { modalStart } from './components/bootstrap';
import '../styles/pages/table.scss';

insertHTML('table');

document.addEventListener('DOMContentLoaded', () => {
  modalStart();
});
