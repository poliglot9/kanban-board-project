import './style.scss';
import {images, initSlider} from './slider';

document.addEventListener("DOMContentLoaded", () => {
    let sliderOptions = {
      dots: true,
      autoplay: true,
      autoplayInterval: 5000
    }
    initSlider(images, sliderOptions);
  });