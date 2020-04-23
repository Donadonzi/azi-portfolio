// $(document).ready(function () {
// 	if (window.devicePixelRatio > 1) {
// 		var images = $("img.YOUR  IMGS CLASS NAME");
// 		images.each(function(item) {			
// 				var src1 = $(this).attr('src');
// 			  var src2 = src1.replace(/(.*)(\.\w+)/, "$1@2x$2");	
//         $(this).attr('src', src2);
// 		});
// 	}	
// });

// <!-- to replace @1 and @2 / name: photo.png and photo@2x.png-->

$(document).ready(function () {
	if (window.devicePixelRatio > 1) {
		var images = $('img.double-source');
		images.each(function () {
			var src1 = $(this).attr('src');
			var src2 = src1.replace('@1x', '@2x');
			$(this).attr('src', src2);
		});
	}

	// if ($(window).width() <= 768) {
	// 	const webImages = $('img.double-source');
	// 	webImages.each(function () {
	// 		const src1 = $(this).attr('src');
	// 		const src2 = src1.replace('Web', 'Mobile');
	// 		$(this).attr('src', src2);
	// 	});	
	// }
	
});