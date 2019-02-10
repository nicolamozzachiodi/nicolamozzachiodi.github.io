$(document).ready(function () {
    var nav = $('.navigation');
    var scrollHeight = (($('.image img').outerHeight()) / 2) + $('.navigation').outerHeight() + 5;
    scrollNav();
    // Animation button on hero slider
    $('.mouse img').click(function () {
        $('html, body').animate({
            scrollTop: $('.about').offset().top - scrollHeight
        }, 500);
    });
    // Animation navbar 
    $(window).scroll(function() {
        scrollNav();
    });
    function scrollNav() {
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            nav.addClass("newNav");
        } else {
            nav.removeClass("newNav");
        }
    }
    function startSlider() {
        $('.slider').slick({
            lazyLoad: 'ondemand',
            slidesToShow: 2,
            slidesToScroll: 1
        });
    }
});