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
  if (currentScrollPosition < 2350 && currentScrollPosition >= 390) {
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

// open mob-nav
$('.menu-btn').on('click', function () {
  $('.menu').toggleClass('menu_active');
  $('.content').toggleClass('content_active');
  $(this).toggleClass('effect_toggle');
  var text = '';
  $(this).hasClass('toggle_nav_active') ? text = 'visible' : text = 'hidden';
  $('.mob-nav-list').css('visibility', text);
});

$(window).resize(function () {
  if ($(window).width() > 1024) {
    $('.menu').removeClass('menu_active');
    $('.content').removeClass('content_active');
    $('.menu-btn').removeClass('effect_toggle');
  }
});