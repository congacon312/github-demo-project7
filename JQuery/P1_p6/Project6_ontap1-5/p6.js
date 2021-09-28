$(function () {
    $('.menu .socialNetwork').slideUp();
    $('.cantrai .menuSlide').slideUp();
    $('.menu .page').slideUp();
    $('.menu .AppOfGoogle').slideUp();
    $('.menu #selec1').click(function (e) {
        e.preventDefault();
        $('.menu .page').slideUp();
        $('.menu .AppOfGoogle').slideUp();
        $('.menu .socialNetwork').slideToggle();

    });

    $('.cantrai').click(function (e) {
        e.preventDefault();
        $('.cantrai .menuSlide').slideToggle();
    });

    $('.menu #selec2').click(function (e) {
        e.preventDefault();
        $('.menu .AppOfGoogle').slideUp();
        $('.menu .socialNetwork').slideUp();
        $('.menu .page').slideToggle();
    });

    $('.menu #selec3').click(function (e) {
        e.preventDefault();
        $('.menu .socialNetwork').slideUp();
        $('.menu .page').slideUp();
        $('.menu .AppOfGoogle').slideToggle();
    });

    $('.facebook').click(function (e) {
        window.location = 'https://www.facebook.com/';
    });

    $('.tapToTop').click(function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 600);
    });

    $('#chap1').click(function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $('.chapter1').offset().top }, 600);
    });

    $('#chap2').click(function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $('.chapter2').offset().top }, 600);
    });

    $('#chap3').click(function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $('.chapter3').offset().top }, 600);
    });

    $('#chap4').click(function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $('.chapter4').offset().top }, 600);
    });

    $('.chapter1 .morong').slideUp();
    $('.chapter1 .motkhoi').click(function (e) {
        e.preventDefault();
        $('.chapter1 .morong').slideToggle();
    });
});
