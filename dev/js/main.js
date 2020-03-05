$(document).ready(function(){
  $('.carousel-photo').owlCarousel({
    margin: 20,
    loop: true,
    responsive: {
      '1200': {
        items: 3,
        nav: true,
        dots: false
      },
    }
  });

  $('input[type="tel"').inputmask('+7 (999) 999-99-99');

  $('.fancybox').fancybox();
});