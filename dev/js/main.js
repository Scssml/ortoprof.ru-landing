$(document).ready(function(){
  function checkQuantity(value){
    if(isNaN(value) || value < 1) {
      value = 1;
    }
    return value;
  }

  $(document).on('click', '.ico-block__dropdown', function(){
    $(this).toggleClass('ico-block__dropdown--active');
    return false;
  });

  $(document).on('click', '.count-block__btn', function(){
    var input = $(this).parents('.count-block').find('.count-block__input');
    var value = parseInt(input.val());
    ($(this).hasClass('count-block__btn--plus')) ? value++ : value--;
    value = checkQuantity(value);
    input.val(value);
    input.change();
    return false;
  });

  $(document).on('change', '.count-block__input', function(){
    var input = $(this);
    var value = parseInt(input.val());
    value = checkQuantity(value);
    input.val(value);
    return false;
  });

  $('.overlay').on('click', function(event) {
    $(this).removeClass('overlay--active');
    $('.top-menu--active').removeClass('top-menu--active');
    event.stopPropagation();
  });

  $(document).on('click', '.burger-menu', function () {
    $('.top-menu').addClass('top-menu--active');
    $('.overlay').addClass('overlay--active');
    return false;
  });

  // $(document).on('click', '.top-menu__item--parent', function () {
  //   $(this).find('.top-menu__level-2').toggleClass('top-menu__level-2--active');
  //   return false;
  // });

  $(document).on('click', '.top-menu__link--parent', function () {
    var windowWidth = $(window).width();
    if(windowWidth < 992){
      $(this).next('.top-menu__level-2').toggleClass('top-menu__level-2--active');
      return false;
    }
  });

  $(document).on('click', '.vertical-menu__title', function () {
    $(this).toggleClass('vertical-menu__title--active');
    return false;
  });

  $(document).on('click', '.dropdown-block__title', function () {
    $(this).toggleClass('dropdown-block__title--active');
    return false;
  });

  $(document).on('click', '.order-block-item__name', function(){
    if($(this).hasClass('order-block-item__name--active')){
      $(this).removeClass('order-block-item__name--active');
      $(this).addClass('order-block-item__name--done');
    } else if($(this).hasClass('order-block-item__name--done')){
      $(this).removeClass('order-block-item__name--done');
      $(this).addClass('order-block-item__name--active');
    } else {
      $(this).addClass('order-block-item__name--active');
    }
  });

  $(document).on('click', '.show-block-btn', function(){
    $(this).addClass('d-none');
    $(this).removeClass('d-inline-block');
    $(this).next('.d-none').removeClass('d-none');
    return false;
  });

  $(document).on('click', '.spoiler__link', function(){
    $(this).addClass('d-none');
    $(this).prev('.spoiler__text').addClass('spoiler__text--show');
    return false;
  });

  $(document).on('click', '.order-next-btn', function(){
    var parentItem = $(this).parents('.order-block-item');
    var nextItem = parentItem.next('.order-block-item');
    parentItem.find('.order-block-item__name').click();
    nextItem.find('.order-block-item__name').click();

    var top =  nextItem.offset().top;
    $('html, body').animate({ scrollTop: top }, 500);

    return false;
  });

  $(document).on('change', '.form__file input', function () {
    var inputText = 'Прикрепить файл'
    if (this.files.length > 0) {
      inputText = this.files[0].name;
    }

    $(this).prev('span').text(inputText);
  });

  $('.main-banner__crousel-left').owlCarousel({
    margin: 20,
    loop: true,
    responsive: {
      '1200': {
        items: 3,
        nav: true,
        dots: false
      },
      '992': {
        items: 2,
        nav: true,
        dots: false
      },
      '768': {
        items: 3,
        nav: true,
        dots: false
      },
      '440': {
        items: 2,
        nav: true,
        dots: false
      },
      '320': {
        items: 1,
        nav: true,
        dots: false
      }
    }
  });

  $('.main-banner__crousel-right').owlCarousel({
    margin: 0,
    loop: true,
    responsive: {
      '320': {
        items: 1,
        nav: true,
        dots: false
      }
    }
  });

  $('.masonry-carousel').owlCarousel({
    margin: 30,
    loop: true,
    responsive: {
      '1200': {
        items: 3,
        nav: true,
        dots: true
      },
      '768': {
        items: 2,
        nav: true,
        dots: true
      },
      '320': {
        items: 1,
        nav: true,
        dots: true
      }
    }
  });

  $('.img-carousel').owlCarousel({
    margin: 10,
    loop: true,
    responsive: {
      '1200': {
        items: 4,
        nav: true,
        dots: true
      },
      '992': {
        items: 3,
        nav: true,
        dots: true
      },
      '576': {
        items: 2,
        nav: true,
        dots: true
      },
      '320': {
        items: 1,
        nav: true,
        dots: true
      }
    }
  });

  $('.gallery-carousel').owlCarousel({
    margin: 5,
    loop: false,
    nav: true,
    dots: false,
    responsive: {
      '1200': {
        items: 5
      },
      '576': {
        items: 4
      },
      '320': {
        items: 3
      }
    }
  });

  $('.gallery-carousel-small').owlCarousel({
    margin: 5,
    loop: false,
    nav: true,
    dots: false,
    responsive: {
      '992': {
        items: 3
      },
      '768': {
        items: 2
      }
    }
  });

  $('.goods-carousel').owlCarousel({
    margin: 16,
    loop: false,
    nav: true,
    dots: false,
    responsive: {
      '992': {
        items: 4
      },
      '768': {
        items: 3
      },
      '320': {
        items: 2
      }
    }
  });

  $('.comments-carousel').owlCarousel({
    margin: 5,
    loop: true,
    responsive: {
      '992': {
        items: 3,
        nav: true,
        dots: true
      },
      '768': {
        items: 2,
        nav: true,
        dots: true
      },
      '320': {
        items: 1,
        nav: false,
        dots: true
      }
    }
  });

  $(".carousel-sections").owlCarousel({
    margin: 10,
    loop: true,
    responsive: {
      '1110' : {
        items: 2,
        nav: true,
        dots: false
      },
      '920' : {
        items: 2,
        nav: true,
        dots: false
      },
      '768': {
        items: 2,
        nav: false,
        dots: true
      },
      '576': {
        items: 1,
        nav: false,
        dots: true
      },
      '320': {
        items: 1,
        nav: false,
        dots: true
      }
    }
  });

  $('input[type="tel"').inputmask('+7 (999) 999-99-99');

  $('.fancybox').fancybox();

  /*$('.masonry-block').masonry({
    itemSelector: '.masonry-block__item',
    gutter: 10
  });*/

  $(window).scroll(function(){
    var windowWidth = $(window).width();

    if($('section').is('.order-block') && windowWidth >= 992){
      var orderBlock = $('.order-block');
      var orderInfo = $('.order-info');
      var orderBlockTop = orderBlock.offset().top - 30;
      var orderBlockHeight = orderBlock.outerHeight();
      var orderInfoHeight = orderInfo.outerHeight();
      var scrollTop = $(this).scrollTop();

      if (scrollTop >= orderBlockTop) {
        var maxScroll = orderBlockTop + orderBlockHeight - orderInfoHeight;
        var translateY = (scrollTop >= maxScroll) ? maxScroll - orderBlockTop : scrollTop - orderBlockTop;
        orderInfo.css('transform', 'translateY(' + translateY + 'px)');
      } else {
        orderInfo.css('transform', 'translateY(0)');
      }
    }
  });

  $(document).on('click', '.select-custom', function(e) {
    var select = $(this);
    var selectList = $(this).find('.select-custom__list');
    if(!selectList.is(e.target) && selectList.has(e.target).length === 0 && select.hasClass('select-custom--active')) {
      select.removeClass('select-custom--active');
      selectList.removeClass('select-custom__list--active');
    } else {
      select.addClass('select-custom--active');
      selectList.addClass('select-custom__list--active');
    }
  });

  // $(document).on('touchend', '.select-custom', function(e) {
  //   $(this).trigger('click');
  // });

  $(document).on('click', function(e) {
    var select = $('.select-custom');
    if(!select.is(e.target) && select.has(e.target).length === 0) {
      $('.select-custom__list--active').removeClass('select-custom__list--active');
      select.removeClass('select-custom--active');
    }
  });

	$(document).on('click', '.select-custom__item', function() {
		var select = $(this).parents('.select-custom');
		var input = $(this).find('input[type="checkbox"');
		var valueName = [];
		
		
		if($(this).hasClass('select-custom__item--selected')) {
			$(this).removeClass('select-custom__item--selected');
			input.prop('checked', false);
		} else {
			$(this).addClass('select-custom__item--selected');
			input.prop('checked', true);
		}

		input.change();

		select.find('.select-custom__item--selected').each(function() {
			valueName.push($(this).text());
		});
		
		valueName = valueName.join(', ');
		
		select.find('.select-custom__value').text(valueName);
	});

  $('.slider-sum').slider({
    range: true,
    create: function( e, ui ) {
      var select = $(e.target).parents('.select-custom');
      var value = [];
      value.push(select.find('.select-custom__min').val());
      value.push(select.find('.select-custom__max').val());

      $(e.target).slider('option', 'min', $(e.target).data('min'));
      $(e.target).slider('option', 'max', $(e.target).data('max'));
      $(e.target).slider('option', 'values', value);
      $(e.target).slider('option', 'step', $(e.target).data('step'));
    },
    slide: function( e, ui ) {
      var select = $(e.target).parents('.select-custom');
      var inputMin = select.find('.select-custom__min');
      var inputMax = select.find('.select-custom__max');
      var selectValue = select.find('.select-custom__value');

      inputMin.val(ui.values[0]);
      inputMax.val(ui.values[1]);
      // selectValue.text(ui.values[0] + '₽ - ' + ui.values[1] + '₽');
    },
    stop: function( e, ui ) {
      var select = $(e.target).parents('.select-custom');
      select.find('.select-custom__min').change();
    },
  });

  $(document).on('change', '.select-custom__input', function(){
    var select = $(this).parents('.select-custom');
    var value = [];
    value.push(select.find('.select-custom__min').val());
    value.push(select.find('.select-custom__max').val());

    $('.slider-sum').slider('values', value);
  });

  $('.slider-sum').draggable();
});