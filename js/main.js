$(document).ready(function(){

	$( ".btnVideos li" ).click(function() {
	  	var id = $(this).attr('id');
	  	var videoUrl = "video/"+id+".mp4";

    	var srcAnterior = $(".video video source").attr('src');

	  	if (srcAnterior != 'javascript:void(0)') {
			srcAnterior = srcAnterior.split('/');
		  	srcAnterior = srcAnterior[1].split('.');
		  	srcAnterior = srcAnterior[0];

		  	//remove a class do video que foi clicado anteriormente
			$('#'+srcAnterior).removeClass('selectedBtn');
	  	}

		//acrescenta a classe ao video que esta a ser tocado
		$(this).addClass('selectedBtn');


		//trocar src do video
		$(".video video source").attr('src', videoUrl);
		$(".video video")[0].load();

		//hide play button (css ::after element)
		$(".video").addClass('changeAfter');

	});

});

function load_home(divConteudo, htmlFile) {
     document.getElementById( divConteudo ).innerHTML='<object type="text/html" data="' + htmlFile + '" ></object>';
}