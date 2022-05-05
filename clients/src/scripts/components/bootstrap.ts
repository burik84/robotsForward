/* eslint-disable no-unused-vars */
/* eslint-disable import/no-relative-packages */
import { Carousel } from '../../../node_modules/bootstrap/dist/js/bootstrap';

const bootstrapStart = () => {
  const myCarousel = document.querySelector('#myCarousel');
  const carousel = new Carousel(myCarousel, {
    // these options values will override the ones set via DATA API
    interval: 50000,
    pause: false,
  });
  carousel.pause();
  carousel.nextWhenVisible();
};
export default bootstrapStart;

// https://thednp.github.io/bootstrap.native/
