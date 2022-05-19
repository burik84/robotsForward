import { insertHTML } from './services/insertHTML';
import { showYoutube, showMap } from './components/iframe';
import { getSourceData } from './services/getData';
// import { SHOWWARNING } from './services/service';
import { carouselStart, modalStart } from './components/bootstrap';
import '../styles/pages/styles.scss';
import { SOURCE } from './services/service';

insertHTML('main');

const showData = async () => {
  const header = document.querySelector('#header .container');
  const time = document.querySelector('#header .h3');
  await getSourceData().then((res) => {
    const text = `<p class="lead text-primary text-center mb-5 mx-3"><span class="badge rounded-pill bg-danger">Внимание!</span> <br> ${res.warning}</p>`;
    if (res.isWarning)header.insertAdjacentHTML('afterbegin', text);
    time.textContent = res.data;
  }).catch(() => {
    const text = `<p class="lead text-primary text-center mb-5 mx-3"><span class="badge rounded-pill bg-danger">Внимание!</span> <br> ${SOURCE.warning}</p>`;

    if (SOURCE.isWarning)header.insertAdjacentHTML('afterbegin', text);
    time.textContent = SOURCE.data;
  });
};

document.addEventListener('DOMContentLoaded', () => {
  carouselStart();
  modalStart();
  // scrollUp();
  showData();
  showYoutube();
  showMap();
});
