$(function () {
    $('.chapter3 .content').slideUp();
    $('.c1').click(function (e) { 
        $('body, html').animate({scrollTop: $('.chapter1').offset().top}, 1000);
    });

    $('.c2').click(function (e) { 
        e.preventDefault();
        $('body, html').animate({scrollTop: $('.chapter2').offset().top}, 1000);
    });
    $('.c3').click(function (e) { 
        e.preventDefault();
        $('body, html').animate({scrollTop: $('.chapter3').offset().top}, 1000);
    });
    $('.c4').click(function (e) { 
        e.preventDefault();
        $('body, html').animate({scrollTop: $('.chapter4').offset().top}, 1000);
    });

    $('.onTop').click(function (e) { 
        e.preventDefault();
        $('body, html').animate({scrollTop: 0}, 1000);
    });

    $('.chapter3 button').click(function (e) { 
        e.preventDefault();
        $(this).next().slideToggle();
        $(this).toggleClass('mauxanh');
        $('body, html').animate({scrollTop: $(this).offset().top - 100}, 500);
    });


    //code hiệu ứng fancy box
    $(".photo a").fancybox({
        'transitionIn'		: 'none',
				'transitionOut'		: 'none',
				'titlePosition' 	: 'over',
				'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
					return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
				}
    });
});

function Submit() {
    var Name = document.getElementById('name').value;
    var Age = document.getElementById('age').value;
    var Gender = document.getElementById('gender').value;

    var output = document.getElementById('output');

    output.innerHTML = 
        "<h2>Your Profile </h2> <h2>Name: " + Name + ".</h2>" +
        "<h2>Age: " + Age + ".</h2>" + 
        "<h2>Gender: " + Gender + ".</2>"; 
}