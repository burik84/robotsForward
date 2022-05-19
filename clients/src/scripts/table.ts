import { insertHTML } from './services/insertHTML';
import { modalStart } from './components/bootstrap';
import { getWinnerData } from './services/getData';
import { WINNER2019 } from './services/service';
import addTableWinner from './components/tableWinner';
import '../styles/pages/table.scss';

insertHTML('table');

const showData = async () => {
  const year = document.querySelector('body').getAttribute('data-year');
  const table = document.querySelector('#winner .table');

  let text:any = '';

  await getWinnerData.table(year).then((res) => {
    text = addTableWinner(res);
    table.append(...text);
  }).catch(() => {
    if (year === '2019') {
      text = addTableWinner(WINNER2019);
    } else if (year === '2022') {
      text = addTableWinner(WINNER2019);
    }
    table.append(...text);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  modalStart();
  showData();
});
