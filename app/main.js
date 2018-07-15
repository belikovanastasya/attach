/*IMPORTS*/
import $ from 'jquery';
import viewportChecker from 'jquery-viewport-checker';
import {TimelineMax, TweenLite} from 'gsap';
import './js/libs/slick.min.js';
import './sass/main.sass';
/*IMPORTS*/


const mainNav = function () {
  let burger = $('.burger');
  let menu = $('.menu');
  let links = menu.find('li');
  let contacts = $('.langs');
  let tl = new TimelineMax({ paused: true });
    
  //MENUANIMATION
  let menuAnimation = tl.to(menu, 0.5, { y: 0})
    .staggerTo(links, 1, { opacity: 1, y: 0 }, 0.05, 0.2)
    .to(contacts, 0.5, {opacity: 1, y: 0},0.5)
  //MENUANIMATION
  burger.click(function () {
    $(this).toggleClass('open');
    $('.menu').toggleClass('active');
    $('body').toggleClass('ovf')
    if (menu.hasClass('active')) {
      menuAnimation.play();
        
    } else {
      tl.reverse();
    }
  });
}
mainNav();
$('.burger').mouseenter(function () {
  let circle = $('.circle_burger');
  TweenLite.to(circle, 1, {y:0, ease: Bounce.easeOut})
})
$('.burger').mouseleave(function () {
  let circle = $('.circle_burger');
  TweenLite.to(circle, 1, {y:-200, ease: Bounce.easeOut})
})

const linksHover = function () {
  let circle = $('.circle_lang');
  let hoverArea = $('.header_info');
  let posX = Math.round(hoverArea.offset().left)
  
  hoverArea.mousemove(function (e) {
    let stepToMove = e.clientX - posX;

   TweenLite.to(circle, 0.5, {x:stepToMove})
  })
  hoverArea.mouseenter(function () {
    TweenLite.to(circle, 0.3, { opacity: 1 });
  })
  hoverArea.mouseleave(function () {
    TweenLite.to(circle, 0.3, { opacity: 0 });
  })
}

linksHover();


