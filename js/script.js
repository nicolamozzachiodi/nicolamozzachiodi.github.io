var nav = $('.navigation');
var scrollHeight = (($('.image img').outerHeight()) / 2) + $('.navigation').outerHeight() + 5;

function scrollNav() {
    if( $(window).width() > 768 ) {
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            nav.addClass("newNav");
        } else {
            nav.removeClass("newNav");
        }
    }
}

// Animation button on hero slider
function scrollArrow() {
    $('.mouse img').click(function () {
        $('html, body').animate({
            scrollTop: $('.about').offset().top - scrollHeight
        }, 500);
    });
}

function startSlider() {
    $('.slider').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 2,
        slidesToScroll: 1
    });
}
function navigation() {
    $(".navBar").toggleClass("openNav");
    var spanHamburger = $(".ham").toArray();
    for(var i = 0; i < spanHamburger.length; i++) {
        var element = spanHamburger[i]; 
        if(i == 1) {
            $(element).toggleClass("navOpenLeft");
        } else {
            $(element).toggleClass("navOpenRight");
        } 
    }
}

$(document).ready(function() {
    // Animation navbar 
    $(".hamburger").on("click", navigation);
    scrollNav();
    $(window).scroll(scrollNav);
    startSlider();
    scrollArrow();
});