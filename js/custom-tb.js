$(document).ready(function(){


	$('.menu').hover(function(){
		$('.barra-navegacao').css('display', 'block');

	});

	$('.seta-dir').click(function(){
		$('.contain img').attr('src', 'images/logifarma-pdf2.jpg');	
		$('.seta-esq').css('display', 'block');
		$('.seta-dir').css('display', 'none');
	});
	$('.seta-esq').click(function(){
		$('.contain img').attr('src', 'images/logifarma-pdf1.jpg');	
		$('.seta-dir').css('display', 'block');
		$('.seta-esq').css('display', 'none');
	});

	
});