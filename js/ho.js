
var titlePT='Conheça a nossa História.';
var titleEN ='Know our History.';

var p1PT ='Ferraz, Lynce, Especialidades Farmacêuticas, S.A. teve a sua origem como agente da empresa alemã Boehringer Mannheimque procurava um representante em Portugal. Iniciou a sua actividade em 1924. Desenvolvendo um trabalho rigorosoe de excelência, rapidamente conseguiu obter representação de outras empresas farmacêuticas, enquanto a BoehringerMannheim atingia grande crescimento e desenvolvimentocientífico com os anti-hipertensores, anti-diabéticosoraise testes bioquímicos promovidos pelo Ferraz, Lynce,Especialidades Farmacêuticas, S.A.<br><br>No decorrer do crescimento da posição do Ferraz, Lynce,Especialidades Farmacêuticas, S.A. no que se refere à promoçãode produtos estrangeiros em Portugal, foi adquirida a FarmáciaInternacional. Com a colaboração de técnicos alemães inicioua produção de produtos próprios.<br><br>O desenvolvimento de produtos próprios cresceu mais do queera possível fabricar na Farmácia Internacional o que levouà contratação de terceiros para os fabricarem. A produção atingiuuma dimensão que justificava a criação/implementação de umafábrica de especialidades farmacêuticas, “nascendo” assimo Laboratório Iberfar – Produtos Farmacêuticos, S.A.– na Avenida Defensores Chaves - que iniciou a suaactividade em 1951.';
var p2PT ='Os projectos em expansão levaram, em 1963, à construção de uma nova unidade fabril em Queluz de Baixo, concebida com base numa visão de crescimento de longo prazo, tornando-se assim a primeira unidade de produção de especialidades farmacêuticas em Portugal. <br><br>Em 1996, fruto do desenvolvimento tecnológico e das crescentes exigências no que se refere à garantia de qualidade, adquirimos a fábrica da MSD, onde nos encontramos actualmente com o objectivo de atingir os mais altos requisitos a nível de GMP’s (GoodManufacturingPractices). Em 1997 teve início a nossa actividade de logística farmacêutica, a Logifarma, empresa altamente especializada que fornece aos seus depositantes uma logística integrada e total, para além de uma gama de outros serviços muito diferenciadores.';

var p1EN ='Ferraz, Lynce, Especialidades Farmacêuticas, S.A. started life as a pharmaceutical agent for the German company Boehringer Mannheim who at the time was looking for a representative for the Portuguese market. Operations began in 1924. Its commitment and effort were soon rewarded when it was appointed as the representative for other pharmaceutical companies. Boehringer Mannheim continued to achieve exceptional growth and scientific success with the anti-hypertension treatments, anti-diabetic orals and biochemical tests promoted by Ferraz, Lynce.<br><br>At the time Ferraz, Lynce was also gaining a reputation for promoting foreign products in Portugal. Farmácia Internacional was acquired and together with German Technicians then began manufacturing its own products.<br><br> The manufacturing of these products grew to such an extent that it became extremely difficult to produce them at Farmácia Internacional making it necessary to resort to support from third parties. Production had reached a level that justified setting  p / implementing a factory for the manufacture of pharmaceutical specialties. Laboratório Iberfar – Produtos Farmacêuticos was thus “born” – located in Avenida Defensores Chaves – starting operations in 1951.<br> ';
var p2EN ='In 1963 on-going projects led to the construction of a new factory unit in Queluz de Baixo envisioned for long-term growth. It became the first unit in Portugal to manufacture pharmaceutical specialties.<br><br> Technological developments and the ever-increasing demands regarding quality assurance led to the acquisition of the MSD plant in 1996, where we are today and where we intend to reach the highest GMPs (Good Manufacturing Practices).<br><br> We began our pharmaceutical logistics activity in 1997. Logifarma, a highly qualified company, provides its customers with integrated and complete logistics services as well as a wide range of other highly differentiated services.';

var ptContent={title: titlePT,  p1:p1PT, p2:p2PT };
var enContent={title: titleEN,  p1:p1EN, p2:p2EN };

var currLang = 'pt';
var currPage=1;



$(document).ready(function(){
	$('.title-article').html(ptContent.title);
	$('.wrapper-grupo p').html(ptContent.p1);

});


function nextPage(){

	if(currPage==1){
		currPage=2;
		if(currLang=='pt'){
				$('.wrapper-grupo p').html(ptContent.p2);
		} else {
			$('.wrapper-grupo p').html(enContent.p2);

		}
			
		$('#navigator').attr('src','images/bt-prev.png');
	}
		
	 else { 
		currPage=1;
		if(currLang=='pt'){

			$('.wrapper-grupo p').html(ptContent.p1);
		} else {
			$('.wrapper-grupo p').html(enContent.p1);

		}
		$('#navigator').attr('src','images/bt-next.png');


	}


}


function setLangContent(lang){

	$('html, body').animate({scrollTo:$('.wrapper-grupo ').offset().top})
	currLang = lang;

	if(currPage==1){
	
		if(currLang=='pt'){
			//alert('ou mudaar')
			$('.wrapper-grupo p').html(ptContent.p1);
		} else {
			$('.wrapper-grupo p').html(enContent.p1);

		}

	} else {
		if(currLang=='pt'){
			//alert('ou mudaar')
			$('.wrapper-grupo p').html(ptContent.p2);
		} else {
			$('.wrapper-grupo p').html(enContent.p2);

		}

	}

	
}