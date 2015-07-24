/* Resources used...
 * http://jquerydemo.com/jquery/fade-to-color-hover-effect.aspx
 * http://stackoverflow.com/questions/3572224/how-to-select-all-class-except-the-clicked-element-in-jquery
 * http://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop
 */

$(document).ready(function(){
	var firstImageSrc = $('.img-choices').children().first().attr('src');
	$('.img-expanded').html('<img src=' + firstImageSrc + '>');

	$('.img-choices img').click(function(){
		$('.img-expanded').html('<img src=' + $(this).attr('src') + '>');
		$('.img-selected').removeClass('img-selected');
		$(this).addClass('img-selected');
		currentSelected = $('.img-selected');
	});

	$('.img-choices img').hover(function(){
		// console.log('hover');
		// Next sibling
		$('.img-choices img').not(this).each(function(){
			$(this).stop().animate({'opacity': '0.5'},200);
		});
	},
	function(){
		// console.log('leave');
		$('.img-choices img').not(this).each(function(){
			$(this).stop().animate({'opacity': '1'},200);
		});
	}
	);

});