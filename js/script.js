import tabs from './modules/tabs';
import calc from './modules/calc';
import forms from './modules/forms';
import modal from './modules/modal';
import slider from './modules/slider';
import timer from './modules/timer';
import cards from './modules/cards';
import { openModal } from './modules/modal';
window.addEventListener('DOMContentLoaded', function () {
  const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);
  tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
  forms('form', modalTimerId);
  modal('[data-modal]', '.modal', modalTimerId);
  slider({
    slide: '.offer__slide',
    container: '.offer__slider',
    nextArrow: '.offer__slider-next',
    prevArrow: '.offer__slider-prev',
    totalCounter: '#total',
    currentCounter: '#current',
    wrapper: '.offer__slider-wrapper',
    field: '.offer__slider-inner',
  });
  timer('.timer', '2023-03-11');
  cards();
  calc();
});
