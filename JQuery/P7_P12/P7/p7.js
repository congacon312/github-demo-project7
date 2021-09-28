$(function () {

    $('.noidung').addClass('NDhienra');
    $('.momo').addClass('dira');

    setInterval(function () {
        $('.noidung').removeClass('NDhienra');
        $('.momo').removeClass('dira');
    }, 7000)

    $('button').click(function (e) {
        $('.noidung').addClass('NDhienra');
        $('.momo').addClass('dira');
    });

    $('.Close, .momo').click(function (e) {
        $('.noidung').removeClass('NDhienra');
        $('.momo').removeClass('dira');
    });

});