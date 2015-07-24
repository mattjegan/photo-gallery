/* Resources used...
 * http://jquerydemo.com/jquery/fade-to-color-hover-effect.aspx
 * http://stackoverflow.com/questions/3572224/how-to-select-all-class-except-the-clicked-element-in-jquery
 * http://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop
 */

$(document).ready(function(){
	var firstImageSrc = $('.img-choices').children().first().attr('src');
	$('.img-expanded').html('<img src=' + firstImageSrc + '>');

	// Cycle through images automatically
	// console.log('Next: ' + $(this).next().attr('src'));

	var currentSelected = $('.img-selected');

	var cycleImages = function() {
		setTimeout(function(){
			// Change highlighted image choice
			// if ($(currentSelected).is(':last-child') == false) {
			// 	console.log('cycling');
			// 	$(currentSelected).next().addClass('img-selected');
			// 	$(currentSelected).removeClass('img-selected');
			// 	currentSelected = $('.img-selected');
			// }
			// else if ($(currentSelected).is(':last-child') == true) {
			// 	console.log('last child reached');
			// 	$(currentSelected).removeClass('img-selected');
			// 	$('img-choices img:first-child').addClass('img-selected');
			// 	currentSelected = $('.img-selected');
			// }

			// currentSelected = $('.img-selected');

			// Change expanded image
			$('.img-expanded').html('<img src=' + $(currentSelected).attr('src') + '>');
			
			// Call function again after it finishes, making it loop
			cycleImages();
		}, 5000);
	}

	cycleImages();

	// setTimeout(function(){
	// 	cycleImages();
	// },3000);

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

	// Delete this
	$('.img-choices:last-child').css('border', '10px solid red');

});