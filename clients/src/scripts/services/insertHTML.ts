import headHTML from '../../pages/template/head.html';
import metrika from '../../pages/template/metrika.html';
import footer from '../../pages/template/footer.html';
import modal from '../../pages/template/modal.html';

const insertHTML = (useMetrica = true) => {
  const head = document.querySelector('head');
  const main = document.querySelector('main');

  head.insertAdjacentHTML('beforeend', headHTML);
  if (useMetrica) head.insertAdjacentHTML('beforeend', metrika);
  main.insertAdjacentHTML('afterend', footer);
  main.insertAdjacentHTML('afterend', modal);
};
const warning = '<p class="lead text-primary text-center mb-5 mx-3"><span class="badge badge-pill badge-danger">Внимание!</span> <br> В связи с введением ограничительных мер, направленных на предотвращение распространения новой коронавирусной инфекции в регионе, соревнования проводится не будут!!!</p>';
export { insertHTML, warning };
