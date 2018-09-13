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

});
// swipe buble animation
$(window).on('scroll', function () {
    let currentScrollPosition = $(this).scrollTop();
    if (currentScrollPosition > 300) {
      $('.sw_wrapper').addClass('active');
    }
    if (currentScrollPosition < 2350 && currentScrollPosition >= 390){
      $('.menu-btn span').css("background", "black");
    } else if (currentScrollPosition < 390) {
      $('.menu-btn span').css("background", "white");
    } else {
      $('.menu-btn span').css("background", "white");
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
window.onload = function() {
  setTimeout(function () {
    $('.sw_wrapper').addClass('active');
  }, 3000)
};

$(window).resize(function(){
  if($( window ).width() > 1024) {
    $('.menu').removeClass('menu_active');
    $('.content').removeClass('content_active');
    $('.menu-btn').removeClass('effect_toggle');
  }

});