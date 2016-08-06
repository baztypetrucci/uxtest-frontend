$(document).ready(function(){
	var imgZoom = $('.zoom').width();
	var zoomProduct = $('.zoom').zoom({
		width:imgZoom+'px',
		addClass: 'zoomer'

	}).loadImage();
	var carousel = $('.myCarousel').carousel({
		limitPerPage:3
	});
	//Para prevenir que los labels de los tabs ejecuten un scroll al top, esto no es el funcionamiento de los tabs
	$('label[for]').on('click', function (e) {
		var target = window[this.htmlFor];
		target.checked = !target.checked;
		e.preventDefault();
	});
	/*Resizer para contenedor de tabs*/
	var altoTabs = 0;
	$('.tab-content').each(function(k,v){
		var altoT = $(v).outerHeight();
		if(altoT>altoTabs){
			altoTabs = altoT;
		}
	});
	// Se Suma el alto de los labels de los tabs
	altoTabs += 51;
	$('.tabsContainer').height(altoTabs);
});
