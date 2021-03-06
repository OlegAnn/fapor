'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// global area
window.mainApp = {
  patternFrontValid: false,
  lastNumbers: true,
  togglePattern: false,
  main: document.querySelector('main')
  // init swiper
};$(window).on('load', function () {
  var mySwiper = new Swiper($('.swiper-container'), {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000
    },
    navigation: {
      nextEl: '.fa-angle-left',
      prevEl: '.fa-angle-right'
    }
  });
  $('.menu-btn span').css("background", "white");
  if ($(window).height() > 1900) {
    $('.sw_wrapper').addClass('active');
  }
});
// swipe buble animation
$(window).on('scroll', function () {
  var currentScrollPosition = $(this).scrollTop();
  if (currentScrollPosition > 300) {
    $('.sw_wrapper').addClass('active');
  }
  if (currentScrollPosition > 390 && currentScrollPosition < 2350) {
    $('.menu-btn span').css("background", "black");
    $('.menu').css("background", "black");
    $('.menu-list a').css("color", "white");
  } else {
    $('.menu-btn span').css("background", "white");
    $('.menu').css("background", "white");
    $('.menu-list a').css("color", "black");
  }
});

var Validation = function () {
  function Validation(selector) {
    _classCallCheck(this, Validation);

    this.selector = selector;
  }

  _createClass(Validation, [{
    key: 'init',
    value: function init() {
      this.selector.email.addEventListener('input', check, false);
      function check() {
        function validateEmail(email) {
          var rExp = /.+@.+\..+/i;
          return rExp.test(email);
        }
        function validate() {
          var $result = $(".result");
          var email = $("#email").val();
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
  }]);

  return Validation;
}();
// add name form for arguments


var validation = new Validation(myform);
validation.init();

$(window).resize(function () {
  if ($(window).width() > 1024) {
    $('.menu').removeClass('menu_active');
    $('.content').removeClass('content_active');
    $('.menu-btn').removeClass('effect_toggle');
    slideout.close();
  }
});

$('.nav-list li:nth-of-type(5) a, .menu-list a:nth-of-type(5)').on('click touchend', function (e) {
  e.preventDefault();
  jQuery('html, body').animate({
    scrollTop: jQuery('.copyright').offset().top
  }, 1500);
});

$('.nav-list li:nth-of-type(4) a, .menu-list a:nth-of-type(4)').on('click touchend', function (e) {
  e.preventDefault();
  jQuery('html, body').animate({
    scrollTop: jQuery('.sw_wrapper').offset().top
  }, 1500);
});

$('.menu-list a:nth-of-type(1)').on('click touchend', function (e) {
  e.preventDefault();
  jQuery('html, body').animate({
    scrollTop: jQuery('header').offset().top
  }, 1500);
});

$('.nav-list li:nth-of-type(3) a, .menu-list a:nth-of-type(3)').on('click touchend', function (e) {
  e.preventDefault();
  jQuery('html, body').animate({
    scrollTop: jQuery('.wrapper_main').offset().top
  }, 1500);
});

var slideout = new Slideout({
  'panel': document.getElementById('panel'),
  'menu': document.getElementById('menu'),
  'padding': window.innerWidth * 40 / 100,
  'side': 'right'
});
setTimeout(function () {
  slideout.on('open', function () {
    // $('.content').addClass('content_active');
    document.querySelector('.content').classList.add('content_active');
    document.querySelector('.menu-btn').classList.add('effect_toggle');
  });
}, 0);
setTimeout(function () {
  slideout.on('close', function () {
    $('.content').removeClass('content_active');
    $('.menu-btn').removeClass('effect_toggle');
  });
}, 0);
// open mob-nav
$('.menu-btn').on('click', function () {
  $(this).toggleClass('effect_toggle');
  $('.content').toggleClass('content_active');
  setTimeout(function () {
    slideout.toggle();
  }, 320);
});