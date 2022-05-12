import headHTML from '../../pages/template/head.html';
import metrika from '../../pages/template/metrika.html';
import footer from '../../pages/template/footer.html';
import modal from '../../pages/template/modal.html';
// import scrollup from '../../pages/template/scrollup.html';

const insertHTML = (page:string) => {
  const head = document.querySelector('head');
  const main = document.querySelector('main');
  // const body = document.querySelector('body');

  head.insertAdjacentHTML('beforeend', headHTML);
  if (page !== 'error') head.insertAdjacentHTML('beforeend', metrika);
  main.insertAdjacentHTML('afterend', footer);
  main.insertAdjacentHTML('afterend', modal);
  // if (page !== 'error') body.insertAdjacentHTML('beforeend', scrollup);
};

const iframeHTML = {
  youtube: '<iframe class="pt-1 pt-sm-2" src="https://www.youtube.com/embed/GBCS0qtjDgU" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen aria-describedby="video-description"></iframe><p id="video-description" class="visually_hidden">Ролик представляет краткий обзор прошедших соревнований "Роботы вперёд" 19 мая 2019года. В соревнованиях приняли участие обучающиеся разных учреждений из г.Кингисепп, г.Ивангорода, Санкт-Петербурга, г.Сланцы и Волосовского района. Ребята смогли поучаствовать в трех категориях: «Царь горы», «Тягачи» и «Механическое сумо».</p>',
  map: '<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Abe645264758c32a012bf168fe8fc43a534a790c0c9d757808e7a6fbaf4253c0a&amp;source=constructor" title="Карта где мы расположены - г. Сланцы, ул. Кирова, д.16, эт.3"></iframe>',
};

export { insertHTML, iframeHTML };
