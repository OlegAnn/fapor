// global area
window.mainApp = {
    patternFrontValid: false,
    lastNumbers: true,
    togglePattern: false,
    main: document.querySelector('main')
}
// init swiper
$(window).on('load', function () {
  let mySwiper = new Swiper($('.swiper-container'), {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
          delay: 5000,
      },
      navigation: {
          nextEl: '.fa-angle-left',
          prevEl: '.fa-angle-right',
      },
  })
  $('.menu-btn span').css("background", "white");
  if ($(window ).height() > 1900) {
    $('.sw_wrapper').addClass('active');
  }
});
// swipe buble animation
$(window).on('scroll', function () {
    let currentScrollPosition = $(this).scrollTop();
    if (currentScrollPosition > 300) {
      $('.sw_wrapper').addClass('active');
    }
    console.log(currentScrollPosition)
    if (currentScrollPosition > 390 && currentScrollPosition < 2350){
      $('.menu-btn span').css("background", "black");
      $('.menu').css("background", "black");
      $('.menu-list a').css("color", "white");
    } else {
      $('.menu-btn span').css("background", "white");
      $('.menu').css("background", "white");
      $('.menu-list a').css("color", "black");
    }
});

class Validation {
  constructor(selector){
    this.selector = selector;
  }
  init() {
    this.selector.email.addEventListener('input', check, false);
    function check() {
      function validateEmail(email) {
        let rExp = /.+@.+\..+/i;
        return rExp.test(email);
      }
      function validate() {
        let $result = $(".result");
        let email = $("#email").val();
        $result.text("");

        if (validateEmail(email)) {
          $result.text(email + " is valid :)");
          $result.css("color", "#b5a263");
        } else {
          $result.text(email + " is not valid :(");
          $result.css("color", "#BD3F32");
        }
        return false;
      }
      $("#email").bind("input", validate);
    }
  }
}
// add name form for arguments
let validation = new Validation(myform);
validation.init();

// open mob-nav
$('.menu-btn').on('click',function () {
  $('.menu').toggleClass('menu_active');
  $('.content').toggleClass('content_active');
  $(this).toggleClass('effect_toggle');
    let text = '';
    $(this).hasClass('toggle_nav_active') ? text = 'visible' : text = 'hidden';
    $('.mob-nav-list').css('visibility', text);
})

$(window).resize(function(){
  if($( window ).width() > 1024) {
    $('.menu').removeClass('menu_active');
    $('.content').removeClass('content_active');
    $('.menu-btn').removeClass('effect_toggle');
  }
});

$('.nav-list li:nth-of-type(5) a, .menu-list a:nth-of-type(5)').on('click', function(e) {
  e.preventDefault();
  jQuery('html, body').animate({
    scrollTop: jQuery('.copyright').offset().top
  }, 1500);
});

$('.nav-list li:nth-of-type(4) a, .menu-list a:nth-of-type(4)').on('click', function(e) {
  e.preventDefault();
  jQuery('html, body').animate({
    scrollTop: jQuery('.sw_wrapper').offset().top
  }, 1500);
});

$('.menu-list a:nth-of-type(1)').on('click', function(e) {
  e.preventDefault();
  jQuery('html, body').animate({
    scrollTop: jQuery('header').offset().top
  }, 1500);
});

$('.nav-list li:nth-of-type(3) a, .menu-list a:nth-of-type(3)').on('click', function(e) {
  e.preventDefault();
  jQuery('html, body').animate({
    scrollTop: jQuery('.wrapper_main').offset().top
  }, 1500);
});