
var titlePT='Conheça a nossa História.';
var titleEN ='Know our History.';

var p1PT ='Ferraz, Lynce, Especialidades Farmacêuticas, S.A. teve a sua origem como agente da empresa alemã Boehringer Mannheim que procurava um representante em Portugal. Iniciou a sua actividade em 1924. Desenvolvendo um trabalho rigoroso e de excelência, rapidamente conseguiu obter representação de outras empresas farmacêuticas, enquanto a Boehringer Mannheim atingia grande crescimento e desenvolvimento científico com os anti-hipertensores, anti-diabéticosoraise testes bioquímicos promovidos pelo Ferraz, Lynce, Especialidades Farmacêuticas, S.A.<br><br>No decorrer do crescimento da posição do Ferraz, Lynce, Especialidades Farmacêuticas, S.A. no que se refere à promoção de produtos estrangeiros em Portugal, foi adquirida a Farmácia Internacional. Com a colaboração de técnicos alemães iniciou a produção de produtos próprios.<br><br>O desenvolvimento de produtos próprios cresceu mais do que era possível fabricar na Farmácia Internacional o que levou à contratação de terceiros para os fabricarem. A produção atingiu uma dimensão que justificava a criação/implementação de uma fábrica de especialidades farmacêuticas, “nascendo” assim o Laboratório Iberfar – Produtos Farmacêuticos, S.A.– na Avenida Defensores Chaves - que iniciou a sua actividade em 1951.';
var p2PT ='Os projectos em expansão levaram, em 1963, à construção de uma nova unidade fabril em Queluz de Baixo, concebida com base numa visão de crescimento de longo prazo, tornando-se assim a primeira unidade de produção de especialidades farmacêuticas em Portugal. <br><br>Em 1996, fruto do desenvolvimento tecnológico e das crescentes exigências no que se refere à garantia de qualidade, adquirimos a fábrica da MSD, onde nos encontramos actualmente com o objectivo de atingir os mais altos requisitos a nível de GMP’s (Good Manufacturing Practices). Em 1997 teve início a nossa actividade de logística farmacêutica, a Logifarma, empresa altamente especializada que fornece aos seus depositantes uma logística integrada e total, para além de uma gama de outros serviços muito diferenciadores.';

var p1EN ='Ferraz, Lynce, Especialidades Farmacêuticas, S.A. started life as a pharmaceutical agent for the German company Boehringer Mannheim who at the time was looking for a representative for the Portuguese market. Operations began in 1924. Its commitment and effort were soon rewarded when it was appointed as the representative for other pharmaceutical companies. Boehringer Mannheim continued to achieve exceptional growth and scientific success with the anti-hypertension treatments, anti-diabetic orals and biochemical tests promoted by Ferraz, Lynce.<br><br>At the time Ferraz, Lynce was also gaining a reputation for promoting foreign products in Portugal. Farmácia Internacional was acquired and together with German Technicians then began manufacturing its own products.<br><br> The manufacturing of these products grew to such an extent that it became extremely difficult to produce them at Farmácia Internacional making it necessary to resort to support from third parties. Production had reached a level that justified setting  p / implementing a factory for the manufacture of pharmaceutical specialties. Laboratório Iberfar – Produtos Farmacêuticos was thus “born” – located in Avenida Defensores Chaves – starting operations in 1951.<br> ';
var p2EN ='In 1963 on-going projects led to the construction of a new factory unit in Queluz de Baixo envisioned for long-term growth. It became the first unit in Portugal to manufacture pharmaceutical specialties.<br><br> Technological developments and the ever-increasing demands regarding quality assurance led to the acquisition of the MSD plant in 1996, where we are today and where we intend to reach the highest GMPs (Good Manufacturing Practices).<br><br> We began our pharmaceutical logistics activity in 1997. Logifarma, a highly qualified company, provides its customers with integrated and complete logistics services as well as a wide range of other highly differentiated services.';

var ptContent={title: titlePT,  p1:p1PT, p2:p2PT };
var enContent={title: titleEN,  p1:p1EN, p2:p2EN };

var currLang = 'pt';
var currPage=1;



$(document).ready(function(){
	$('.title-article').html(ptContent.title);
	$('.wrapper-grupo p').html(ptContent.p1);


	//Fixed Hover Interaction on nav-bar
	$( ".nav-bar div.pt , .nav-bar div.uk" ).click(function() {
		var classDiv = $(this).attr('class');
		//Para quando se clicar na home não tirar a seleção da lingua
		if (classDiv != 'pt' ) {
			$(".nav-bar div.pt").removeClass('selectedNav');
		}else{
			$(".nav-bar div.uk").removeClass('selectedNav');
		}
		
		$(this).addClass('selectedNav');
	});

});


function nextPage(){
	$('html, body').animate({scrollTop:$('body').offset().top});
	
	if(currPage==1){
		currPage=2;

		if(currLang=='pt'){
			$('.wrapper-grupo .title-article').html(ptContent.title);
			$('.wrapper-grupo p').html(ptContent.p2);

			$(".nav-bar div").removeClass('selectedNav');
			$(".nav-bar div.pt").addClass('selectedNav');
		} else {
			$('.wrapper-grupo .title-article').html(enContent.title);
			$('.wrapper-grupo p').html(enContent.p2);
			
			$(".nav-bar div").removeClass('selectedNav');
			$(".nav-bar div.uk").addClass('selectedNav');
		}
			
		$('#navigator').addClass('prev');
		
	}
		
	 else { 
		currPage=1;
		if(currLang=='pt'){
			$('.wrapper-grupo .title-article').html(ptContent.title);
			$('.wrapper-grupo p').html(ptContent.p1);

			$(".nav-bar div").removeClass('selectedNav');
			$(".nav-bar div.pt").addClass('selectedNav');
		} else {
			$('.wrapper-grupo .title-article').html(enContent.title);
			$('.wrapper-grupo p').html(enContent.p1);

			$(".nav-bar div").removeClass('selectedNav');
			$(".nav-bar div.uk").addClass('selectedNav');
		}
		
		$('#navigator').removeClass('prev');


	}


}


function setLangContent(lang){

	$('html, body').animate({scrollTop:$('body').offset().top});
	currLang = lang;

	if(currPage==1){
	
		if(currLang=='pt'){
			//alert('ou mudaar')
			$('.wrapper-grupo .title-article').html(ptContent.title);
			$('.wrapper-grupo p').html(ptContent.p1);
		} else {
			$('.wrapper-grupo .title-article').html(enContent.title);
			$('.wrapper-grupo p').html(enContent.p1);
		}

	} else {
		if(currLang=='pt'){
			//alert('ou mudaar')
			$('.wrapper-grupo .title-article').html(ptContent.title);
			$('.wrapper-grupo p').html(ptContent.p2);
		} else {
			$('.wrapper-grupo .title-article').html(enContent.title);
			$('.wrapper-grupo p').html(enContent.p2);

		}

	}

	
}