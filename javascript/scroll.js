$(function(){
	$('.productName').animate({
		opacity : "1.0",
		top :"50%"
	},2000);
	var view = $('body');
	var	contentNum = new Array();
	var	current = -1;
	var	bgImage = new Array("images/kitchen.jpg","images/athome.jpg","images/system.jpg","images/wash.jpg","images/flexible.jpg");
	var content = $('.content');
	var allHeight = $('body').outerHeight(true);
	content.each(function (i) {
        contentNum[i] = $(this).offset().top;
    });
    $(window).scroll(function () { 
        for (var i = contentNum.length-1; i>=0; i--) {
            if ($(window).scrollTop() > contentNum[i] - 100) {
                changeBG(i);
                break;
            }
        }
    });
    function changeBG(secNum) {
            if (secNum != current) {
               current = secNum;
               view.css({backgroundImage:"url(" + bgImage[current] + ")"});

            }
    }
});