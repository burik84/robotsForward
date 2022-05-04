/* eslint-disable no-unused-vars */
/* eslint-disable import/no-relative-packages */
import { Carousel } from '../../../node_modules/bootstrap/dist/js/bootstrap';

const carouselStarted = () => {
  const myCarousel = document.querySelector('#myCarousel');
  const carousel = new Carousel(myCarousel, {
    // these options values will override the ones set via DATA API
    interval: false,
    pause: false,
  });
};
export default carouselStarted;

// https://thednp.github.io/bootstrap.native/
