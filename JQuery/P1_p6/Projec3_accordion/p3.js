$(function () {
    $('.content').slideUp();
    $('.motkhoi h3').click(function (e) { 
        e.preventDefault();
        /* $(this).next().slideToggle(); */
        $(this).next().slideToggle();
        $(this).toggleClass('xanh');
    });

    $('#mk1').click(function (e) { 
        e.preventDefault();
        $('body, html').animate({scrollTop: $(this).offset().Top}, 100)
    });

    $('#mk2').click(function (e) { 
        e.preventDefault();
        $('body, html').animate({scrollTop: $(this).offset().Top}, 100)
    });

    $('#mk3').click(function (e) { 
        e.preventDefault();
        $('body, html').animate({scrollTop: $(this).offset().Top}, 100)
    });

    $('#mk4').click(function (e) { 
        e.preventDefault();
        $('body, html').animate({scrollTop: $(this).offset().Top}, 100)
    });
});