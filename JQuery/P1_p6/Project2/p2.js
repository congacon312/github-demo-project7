$(document).ready(function () {
    $('.register').click(function (e) {
        e.preventDefault();
        $('.dangky').animate({ opacity: 0, marginLeft: -50 });
        $('.dangnhap').animate({ opacity: 1, marginLeft: 0 });
    });

    $('.login').click(function (e) {
        e.preventDefault();
        $('.dangnhap').animate({ opacity: 0, marginLeft: -50 });
        $('.dangky').animate({ opacity: 1, marginLeft: 0 });
    });
});