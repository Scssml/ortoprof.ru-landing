$(document).ready(function(){
  $('.carousel-photo').owlCarousel({
    margin: 20,
    loop: true,
    responsive: {
      '992': {
        items: 3,
        nav: true,
        dots: false
      },
      '576': {
        items: 2,
        nav: true,
        dots: false
      },
      '320': {
        items: 1,
        nav: false,
        dots: false
      },
    }
  });

  $('input[type="tel"').inputmask('+7 (999) 999-99-99');

  $('.fancybox').fancybox();

  $(document).on('click', '.dropdown-block__link', function(){
    $(this).toggleClass('dropdown-block__link--active');
    // var height = $(this).next('.dropdown-block__text').outerHeight();
    // console.log(height);
    return false;
  });
});