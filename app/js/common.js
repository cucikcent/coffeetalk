
$(function() {
	$('.carousel').carousel();


	$('.open-button, .mobile-menu a').click(function(){
		$(".open-button").toggleClass('open');
		$(".mobile-menu").toggleClass('open');
	});

	$(".mobile-menu").on("click",".onpage",function(e){
		e.preventDefault();
		var t=$(this).attr("href"),i=$(t).offset().top;
		$("body,html").animate({scrollTop:i},1000);
	});
});


$(document).ready(function(){


	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
		}
	});

});


