import { insertHTML } from './services/insertHTML';
import scrollUp from './components/scrollUp';
import '../styles/pages/table.scss';

insertHTML('table');

document.addEventListener('DOMContentLoaded', () => {
  scrollUp();
});
