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
        dots: true
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

  $(document).scroll(function(){
    var scrollTop = $(this).scrollTop();
    
    if(scrollTop >= 80){
      $('.header').addClass('header--scroll');
    } else {
      $('.header').removeClass('header--scroll');
    }
  });

  $(document).on('submit', '.form-ajax', function(){
    var form = $(this);
    var action = form.attr('action');
    var method = form.attr('method');
    var formData = new FormData(form.get(0));

    form.find('.form__response').addClass('d-none');

    $.ajax({
      url: (action) ? action : location.href,
      type: (method) ? method : 'post',
      data: formData,
      contentType: false,
      processData: false,
      success: function(data){
        var data = JSON.parse(data);
        form.find('.form__response').text(data.text);

        if(data.success){
          form.find('.form__response').addClass('form__response--success');
        } else {
          form.find('.form__response').removeClass('form__response--success');
        }

        form.find('.form__response').removeClass('d-none');
      }
    });

    return false;
  });
});