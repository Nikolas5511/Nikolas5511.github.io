$(document).ready(function(){
    $('.slide-offer').slick({
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
        // responsive: [
        //     {
        //       breakpoint: 768,
        //       settings: {
        //         slidesToShow: 3,
        //         slidesToScroll: 3,
        //         infinite: true,
        //         dots: true
        //       }
        //     }
        //   ]
      });
  });













/* window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.top_menu_up'),
    menuItem = document.querySelectorAll('.top_menu_item'),
    hamburger = document.querySelector('.top_menu_still');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('top_menu_still_active');
        menu.classList.toggle('top_menu_up_active');
    });

    // menuItem.forEach(item => {
    //     item.addEventListener('click', () => {
    //         hamburger.classList.toggle('top_menu_still_active');
    //         menu.classList.toggle('top_menu_up_active');
    //     })
    // })
})
 */