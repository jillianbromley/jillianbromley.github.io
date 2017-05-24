// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

// $('#first').click(function(){
//   $('#bigimage').attr('img/1.jpg', 'img/1.jpg');
// })

$('.thumb').click(function(){
	var thumbnailSrc = $(this).attr('src');
	$('#bigimage').attr('src', thumbnailSrc);
	$('#fourth').prev().css('border', '5px solid red');

	// $('#first').next().css('border', '5px solid red');
	// $('#first').siblings().css('border', '5px solid red');
	// $('#wrapper').parent().css('border', '5px solid red');
	// $('#thumbnails').children().css('border', '5px solid red');



})


// $('#first').click(function(){
//   var thumbnailSrc = $('#first').attr('src');

//   $('#bigimage').attr('src', thumbnailSrc);

// })

// $('#second').click(function(){
//   var thumbnailSrc = $('#second').attr('src');

//   $('#bigimage').attr('src', thumbnailSrc);
// })

// $('#third').click(function(){
//   var thumbnailSrc = $('#third').attr('src');

//   $('#bigimage').attr('src', thumbnailSrc);
// })

// $('#fourth').click(function(){
//   var thumbnailSrc = $('#fourth').attr('src');

//   $('#bigimage').attr('src', thumbnailSrc);
// })