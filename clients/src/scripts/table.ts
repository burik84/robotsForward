/* eslint-disable no-unused-vars */
/* eslint-disable import/no-relative-packages */
import { Modal } from '../../node_modules/bootstrap/dist/js/bootstrap';
import { insertHTML } from './services/insertHTML';
import '../styles/pages/table.scss';

insertHTML('table');

document.addEventListener('DOMContentLoaded', () => {
  const aboutModal = new Modal(document.getElementById('aboutus'));
  const refuseModal = new Modal(document.getElementById('refusing'));
});
