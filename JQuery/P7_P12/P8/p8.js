$(function () {


    $('button.displayMenu').click(function (e) { 
        $('ul').toggleClass('hienra');
        $(this).toggleClass('doimau');
    });

    $('button.dangnhap').click(function (e) { 
        e.preventDefault();
        $('.login').addClass('appear');
    });

    $('button.dangki').click(function (e) { 
        e.preventDefault();
        $('.register').addClass('appear');
    });

    $('.login .nut, .login .close').click(function (e) { 
        e.preventDefault();
        $('.login').removeClass('appear');
    });

    $('.register .nut, .register .close').click(function (e) { 
        e.preventDefault();
        $('.register').removeClass('appear');
    });

    $('.chuyenQuaDangKi').click(function (e) { 
        e.preventDefault();
        $('.login').removeClass('appear');
        $('.register').addClass('appear');
    });

    $('.ChuyenQuaDangNhap').click(function (e) { 
        e.preventDefault();
        $('.register').removeClass('appear');
        $('.login').addClass('appear');
    });
});