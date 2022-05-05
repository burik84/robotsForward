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
const warning = '<p class="lead text-primary text-center mb-5 mx-3"><span class="badge rounded-pill bg-danger">Внимание!</span> <br> В связи с введением ограничительных мер, направленных на предотвращение распространения новой короновирусной инфекции в регионе, соревнования проводится не будут!!!</p>';
export { insertHTML, warning };
