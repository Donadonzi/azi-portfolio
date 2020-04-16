$(document).ready(function(){

	$('.portfolio__proj').mouseenter(function(){
		const id = $(this).attr('id');
		$(`#${id} .portfolio__proj__description`).slideToggle();
		$(`#${id} .portfolio__proj__image, #${id} .portfolio__proj__title, #${id} .portfolio__proj__subtitle` ).addClass('hovered');
	});

	$('.portfolio__proj').mouseleave(function(){
		const id = $(this).attr('id');
		$(`#${id} .portfolio__proj__description`).slideUp();
		$(`#${id} .portfolio__proj__image, #${id} .portfolio__proj__title, #${id} .portfolio__proj__subtitle` ).removeClass('hovered');
	});


});