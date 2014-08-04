$(document).ready(function() {
		$(".fancybox").fancybox();
		
	
		   	});
	
$(document).ready(function() {
	$('.fancybox-media').fancybox({
		openEffect  : 'none',
		closeEffect : 'none',
		helpers : {
			media : {}
		}
	});
});

$(function(){
	var mainMenu = $('#mainMenu');
	
	mainMenu.on('click', 'a', null, function(){
		mainMenu.collapse('hide');
	});
});

jQuery(document).ready(function($){

	$(window).load(function(){
	
		$('#preloader').fadeOut('slow', function(){
			$(this).remove();
		});
	});
});