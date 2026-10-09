jQuery(document).ready(function($) {

	let art = '',
		price = '',
		oldPrice = '';

	$('.specifications .variant').on('click', function(event) {

		event.preventDefault();
		$(this).addClass('active').siblings().removeClass('active');
		art = $(this).find('.art').text();
		price = $(this).find('.price').text();
		oldPrice = $(this).find('.old-price').text();

		$('.selected-block .selected-art').text(art);
		$('.selected-block .selected-price').text(price);
		$('.selected-block .selected-old-price').text(oldPrice);

	});
	
});