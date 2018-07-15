/*IMPORTS*/
import $ from 'jquery';
import viewportChecker from 'jquery-viewport-checker';
import {TimelineMax} from 'gsap';
import './js/libs/slick.min.js';
import './sass/main.sass';
/*IMPORTS*/


$('.burger').click(function () {
  $(this).toggleClass('open');
  $('.circle svg').toggleClass('start')
})





