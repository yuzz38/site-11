$(document).ready(function(){
   
  if ($(window).width() > 700) {
    pcMenu.addEventListener('mouseover', function(event){
      event.preventDefault();
      pcItem.classList.add('opens')
    })
    pcMenu.addEventListener('mouseout', function(event){
      event.preventDefault();
      pcItem.classList.remove('opens')
    })
 }
 else {
  pcMenu.addEventListener('click', function(event){
    event.preventDefault();
    pcItem.classList.toggle('opens')
  })
 }
  })
  const numStr = document.querySelector('.str-num');
  const phoneVIP = document.querySelector('.phone-vip');
  const hiddennum = document.querySelector('.hidden-num');
  numStr.addEventListener('click', function(event){
    event.preventDefault();
    phoneVIP.classList.toggle('activee');
    hiddennum.classList.toggle('activee');
  })
  const pcMenu = document.querySelector('.pc-menu');
  const pcItem = document.querySelector('.menu-links');
  const loop = document.querySelector('.loop');
  const searchPanel = document.querySelector('.search-panel');
  loop.addEventListener('click', function(event){
    event.preventDefault();
    searchPanel.classList.toggle('search-panel--active');
  })
   

  const closebtn = document.querySelector('.btn-toclose');
  const body = document.querySelector('#body');
  const nav = document.querySelector('.nav');
  closebtn.addEventListener('click',function(event){
    event.preventDefault();
    body.classList.remove('body-hidden');
    nav.classList.remove('activ');
  })
  const headburg = document.querySelector('.header-burger');
  headburg.addEventListener('click',function(event){
    event.preventDefault();
    body.classList.add('body-hidden');
   nav.classList.add('activ');
  })
  var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  $('.button').click( function(e) {
    e.preventDefault();
    $('.overlay').fadeIn();
  });
  
  // Закрытие окна на крестик
  $('.close-popup').click( function() {
    $('.overlay').fadeOut();
  });
  
  // Закрытие окна на поле
  $(document).mouseup( function (e) { 
    var popup = $('.popup');
    if (e.target != popup[0] && popup.has(e.target).length === 0){
      $('.overlay').fadeOut();
    }
  });
  