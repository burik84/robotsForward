import { iframeHTML } from '../services/insertHTML';

const heightWindow = document.documentElement.clientHeight;
const addIframe = (container:HTMLDivElement, element:string, height:number) => {
  let isShow = true;
  window.addEventListener('scroll', () => {
    const heightScroll = window.pageYOffset;
    if (heightScroll > height && isShow) {
      container.insertAdjacentHTML('afterbegin', element);
      isShow = !isShow;
    }
  });
};

export const showYoutube = () => {
  const iframeYoutube:HTMLDivElement = document.querySelector('.embed-responsive');
  addIframe(iframeYoutube, iframeHTML.youtube, heightWindow / 2);
};
export const showMap = () => {
  const iframeMap:HTMLDivElement = document.querySelector('.map');
  addIframe(iframeMap, iframeHTML.map, heightWindow);
};
