
const accordionBtn1 = document.querySelector('.accordion-title1');
const accordionContent1 = document.querySelector('.accordion-content1');
accordionBtn1.addEventListener('click', function(event){
    event.preventDefault();
    accordionContent1.classList.toggle('active');
    accordionBtn1.classList.toggle('accordion-title1--active');
})
const accordionBtn2 = document.querySelector('.accordion-title2');
const accordionContent2 = document.querySelector('.accordion-content2');
accordionBtn2.addEventListener('click', function(event){
    event.preventDefault();
    accordionContent2.classList.toggle('active');
    accordionBtn2.classList.toggle('accordion-title2--active');
})
const accordionBtn3 = document.querySelector('.accordion-title3');
const accordionContent3 = document.querySelector('.accordion-content3');
accordionBtn3.addEventListener('click', function(event){
    event.preventDefault();
    accordionContent3.classList.toggle('active');
    accordionBtn3.classList.toggle('accordion-title3--active');
})
const accordionBtn4 = document.querySelector('.accordion-title4');
const accordionContent4 = document.querySelector('.accordion-content4');
accordionBtn4.addEventListener('click', function(event){
    event.preventDefault();
    accordionContent4.classList.toggle('active');
    accordionBtn4.classList.toggle('accordion-title4--active');
})
const accordionBtn5 = document.querySelector('.accordion-title5');
const accordionContent5 = document.querySelector('.accordion-content5');
accordionBtn5.addEventListener('click', function(event){
    event.preventDefault();
    accordionBtn5.classList.toggle('accordion-title5--active');
    accordionContent5.classList.toggle('active');
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
      const numStr = document.querySelector('.str-num');
      const phoneVIP = document.querySelector('.phone-vip');
      const hiddennum = document.querySelector('.hidden-num');
      numStr.addEventListener('click', function(event){
        event.preventDefault();
        phoneVIP.classList.toggle('activee');
        hiddennum.classList.toggle('activee');
      })
      const loop = document.querySelector('.loop');
      const searchPanel = document.querySelector('.search-panel');
      loop.addEventListener('click', function(event){
        event.preventDefault();
        searchPanel.classList.toggle('search-panel--active');
      })
      const exampleBig1 = document.querySelector('.example-big1');
      exampleBig1.addEventListener('mouseover', function(){
        exampleBig1.classList.add('bg');
      })
      exampleBig1.addEventListener('mouseout', function(){
        exampleBig1.classList.remove('bg');
      })
      
      const exampleBig2 = document.querySelector('.example-big2');
      exampleBig2.addEventListener('mouseover', function(){
        exampleBig2.classList.add('bg');
      })
      exampleBig2.addEventListener('mouseout', function(){
        exampleBig2.classList.remove('bg');
      });
      
      const exampleSmal1 = document.querySelector('.exmp1');
      exampleSmal1.addEventListener('mouseover', function(){
        exampleSmal1.classList.add('bg');
      })
      exampleSmal1.addEventListener('mouseout', function(){
        exampleSmal1.classList.remove('bg');
      });

      const exampleSmal2 = document.querySelector('.exmp2');
      exampleSmal2.addEventListener('mouseover', function(){
        exampleSmal2.classList.add('bg');
      })
      exampleSmal2.addEventListener('mouseout', function(){
        exampleSmal2.classList.remove('bg');
      });

      const exampleSmal3 = document.querySelector('.exmp3');
      exampleSmal3.addEventListener('mouseover', function(){
        exampleSmal3.classList.add('bg');
      })
      exampleSmal3.addEventListener('mouseout', function(){
        exampleSmal3.classList.remove('bg');
      });

      const exampleSmal4 = document.querySelector('.exmp4');
      exampleSmal4.addEventListener('mouseover', function(){
        exampleSmal4.classList.add('bg');
      })
      exampleSmal4.addEventListener('mouseout', function(){
        exampleSmal4.classList.remove('bg');
      });
      const pcMenu = document.querySelector('.pc-menu');
      const pcItem = document.querySelector('.menu-links');
      $(document).ready(function(){
      //   $(".header-burger").click(function(event){
      //     event.preventDefault();
      //      $("#body").toggleClass("body-hidden");
      //      $(".nav").toggleClass("activ");
      // });
      
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
    
