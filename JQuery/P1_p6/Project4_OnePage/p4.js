$(function () {
    $('.c1').click(function (e) { 
        $(this).toggleClass('xanh');
        $('body, html').animate({scrollTop: $('.chapter1').offset().top}, 1000);
    });

    $('.c2').click(function (e) { 
        $(this).toggleClass('xanh');
        $('body, html').animate({scrollTop: $('.chapter2').offset().top}, 1000);
    });

    $('.c3').click(function (e) { 
        $(this).toggleClass('xanh');
        $('body, html').animate({scrollTop: $('.chapter3').offset().top}, 1000);
    });

    $('.c4').click(function (e) { 
        $(this).toggleClass('xanh');
        $('body, html').animate({scrollTop: $('.chapter4').offset().top}, 1000);
    });

    $('.tapToTop').click(function (e) { 
        $('body, html').animate({scrollTop:0}, 1000);
    });
});