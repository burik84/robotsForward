import { insertHTML } from './services/insertHTML';
import { modalStart } from './components/bootstrap';
// import { getWinnerData } from './services/getData';
import { WINNER2019 } from './services/service';
import addTableWinner from './components/tableWinner';
import '../styles/pages/table.scss';

insertHTML('table');

const showData = async () => {
  const year = document.querySelector('body').getAttribute('data-year');
  const table = document.querySelector('#winner .table');

  let text:any = '';
  if (year === '2022') {
    text = addTableWinner(WINNER2019);
    console.log('aw3ait', text);

    table.append(...text);

    // await getWinnerData.table(year).then((res) => {
    //   console.log('ghhhr');
    // }).catch(() => {
    //   console.log(year, table);
    //   text = addTableWinner(WINNER2019);
    //   console.log('aw3ait', text);

    //   table.insertAdjacentHTML('afterbegin', text);
    // });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  modalStart();
  showData();
});
