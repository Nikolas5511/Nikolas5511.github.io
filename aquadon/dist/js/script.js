$(document).ready(function(){
    $('.slide-promo').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>'
      });
      $('ul.tabs__list').on('click', 'li:not(.title_tab_active)', function() {
        $(this)
          .addClass('title_tab_active').siblings().removeClass('title_tab_active')
          .closest('div.container').find('div.tabs__wrapper').removeClass('tabs__wrapper_active').eq($(this).index()).addClass('tabs__wrapper_active');
      });
  });

  window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu_min'),
    menuItem = document.querySelectorAll('.menu_link'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_min_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_min_active');
        })
    })

    // Modal

    $('[data-modal=back-call]').on('click', function() {
      $('.overlay, #back-call').fadeIn();
    });
    $('.modal__close').on('click', function() {
      $('.overlay, #back-call, #thanks').fadeOut('slow');
    });

    // Validaition form

    function validateForms(form) {
      $(form).validate({
        rules: {
          phone: {
            required: true,
            minlength: 5,
            maxlength: 11
          }
        },
        messages: {
          phone: {
            required: "Поле Ваш телефон является обязательным",
            minlength: jQuery.validator.format("Номер телефона должен содержать не менее 5 цифр"),
            maxlength: jQuery.validator.format("Номер телефона должен содержать не более 11 цифр")
          }
        }
      });      
    };

    validateForms('#ask-form');
    validateForms('#back-call form');

    // mail

    $('form').submit(function(e) {
      e.preventDefault();
      $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
      }).done(function() {              // Говорим, что после выполнения ajax запроса, мы выполняем еще одну функцию
        $(this).find("input").val(""); // Говорим что для этой формы находятся поля input и очищаются их содержимое
        $(this).find("textarea").val("");
        $('#back-call form').fadeOut(); // Элементы с заданным id исчезают с экранов
        $('.overlay, #thanks').fadeIn('slow');
        $('form').trigger('reset');    // Находим все элементы с тегом form и совершаем обновление         
      });
      return false;
    });

  //scroll-up

  $(window).scroll(function() {  // Следим за процессом скролинга на всем поле сайта
    if ($(this).scrollTop() > 1600) {  // Если для текущего окна проскроленно 1600 px от начала страницы
      $('.page-up').fadeIn('slow');   // То элемент с классом page-up будет появляться
    } else {
      $('.page-up').fadeOut();  // Иначе этот элемент должен скрываться
    }
  });

  $("a[href=#up]").click(function(){ //Для атрибута href элемента c id="#up" на # отслеживаем клик
        const _href = $(this).attr("href"); // назначаем переменную _href и получаем в него $(this) значение самого атрибута .attr("href"), в данном случае переменная _href будет равняться up
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"}); // Анимация jQuerry, для элементов html и body применяется анимация скроллинга до значения переменной _href 
    return false;
  });
})
  

