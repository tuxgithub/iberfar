$(document).ready(function(){

	$( ".btnVideos li" ).click(function() {
	  	var id = $(this).attr('id');
	  	//alert(id);
	  	$('.btnVideos li[id^="video"]').removeClass('selectedBtn');
	  	if (id == 'video5' || id == 'video6' || id == 'video9') {
	  		
	  		
	  		var imgURL;
	  		if (id == 'video6') {
				imgURL = 'video/'+ id + '.gif';
	  		}else{
	  			imgURL = 'video/'+ id + '.jpg';
	  		}

	  		$(".video").css('display', 'none');
	  		$(".foto").css('display', 'block');
	  		$(".foto img").attr('src', imgURL);

	  		$(this).addClass('selectedBtn');

	  	}else{
	  		$(".foto").css('display', 'none');
	  		$(".video").css('display', 'block');

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

		}

	});

	//Fixed Hover Interaction on nav-bar
	$( ".nav-bar div" ).click(function() {
		var classDiv = $(this).attr('class');
		//Para quando se clicar na home não tirar a seleção da lingua
		if (classDiv != 'home') {
			$(".nav-bar div").removeClass('selectedNav');
		}
		
		$(this).addClass('selectedNav');
	});
});//doc-ready




/**********************************************
				PT / EN Texts
**********************************************/
var h1PT="Visite a Nossa Fábrica. <span>Selecione o video e toque em “Play” para ver.";
var h1EN ="Visit Our Factory. <span>Select the video and tap “Play” to view.";

var ptVideos={
	1: 'Enchimento <br>de Saquetas', 
	2: 'Enchimento <br>de Liquidos', 
	3: 'Embalagem <br>de Sólidos', 
	4: 'Controlo <br>de Qualidade', 
	5: 'Revestimento', 
	6: 'Compressora', 
	7: 'Misturadora', 
	8: 'Pesagem', 
	9: 'Granulação'
};

var enVideos={
	1: 'Sachet Filling', 
	2: 'Liquids Filling', 
	3: 'Solid Forms<br>Packaging', 
	4: 'Quality Control', 
	5: 'Film Coating', 
	6: 'Compress<br>Machine', 
	7: 'Blender', 
	8: 'Weighing', 
	9: 'Granulation'
};

var ptContent={h1: h1PT, vid: ptVideos };
var enContent={h1: h1EN, vid: enVideos };


function setLangContent(lang){

	if(lang=='pt'){
		$('.iberfar_container h1').html(ptContent.h1);
		//Loop pelos li's para mudar o texto
		for (var i = 1; i <= Object.keys(ptContent.vid).length; i++) {
			$('#video'+ i ).html(ptContent.vid[i] );
		}

	} else if(lang=='en') {
		
		$('.iberfar_container h1').html(enContent.h1);
		//Loop pelos li's para mudar o texto
		for (var i = 1; i <= Object.keys(enContent.vid).length; i++) {
			$('#video'+ i ).html(enContent.vid[i] );
		}

	}
}