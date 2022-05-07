/* eslint-disable no-unused-vars */
/* eslint-disable import/no-relative-packages */
import { Carousel, Modal } from '../../../node_modules/bootstrap/dist/js/bootstrap';

const carouselStart = () => {
  const carousel = new Carousel(document.getElementById('myCarousel'));
};

const modalStart = () => {
  const aboutModal = new Modal(document.getElementById('aboutus'));
  const refuseModal = new Modal(document.getElementById('refusing'));
};
export { carouselStart, modalStart };

// https://thednp.github.io/bootstrap.native/
