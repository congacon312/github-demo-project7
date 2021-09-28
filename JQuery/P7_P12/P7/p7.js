$(function () {
    $('button').click(function (e) { 
        $('.noidung').addClass('NDhienra');
        $('.momo').addClass('dira');
    });

    $('.Close, .momo').click(function (e) { 
        $('.noidung').removeClass('NDhienra');
        $('.momo').removeClass('dira');
    });

});