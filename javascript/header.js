$(function(){
	var header = $('#menu');
	var secLink = $('.secLink');
	var linkWrap = $('navWrap');
	var titleArray = new Array('スマホ','ヒーター','掃除','フレキシブル','一番上');
	secLink.hover(function(){	

		$(this).stop().animate({width: '180px',right:'180px'},'slow',function(){{
			$(this).text(titleArray[$(this).index()]);
		}});
		
		console.log('ok');
		
	},function(){
		$(this).text('');
		$(this).stop().stop().animate({width: '30px',right:'30px'},'slow');
		
	});
	$(window).scroll(function(){
		if($(this).scrollTop() > 100){
			header.fadeIn('slow');
			$('.navWrap').fadeIn('slow');
		}else{
			header.fadeOut('slow');
		}
	});
	
});