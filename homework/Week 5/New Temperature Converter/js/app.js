$('#submit').click(function(){
	var tempInput = $('.current-temp-input').val();
		tempInput = parseFloat(tempInput);

	var unitInput = $('.unit-selection input:checked').val();

	$('#current-temp-text').html(tempInput).css('color', 'black');
	$('#current-unit-text').html(unitInput).css('color', 'black');
	$('.unit-selection').val()

	var unitResult = $('.unit-selection input:not(:checked)').val();

	$('#newunit').html(unitResult);

	if (unitInput == 'Farenheit') {
		$('#newtemp').html(((tempInput - 32) * 5 / 9) + '&#176');
	} else {
		$('#newtemp').html((tempInput * 9 / 5 + 32) + '&#176');
	}
})





// $('#submit').click(function(){
// 	var tempInput = $('.current-temp-input').val();
// 		tempInput = parseFloat(tempInput);

// 	var unitInput = $('.unit-selection input:checked').val();

// 	$('#current-temp-text').html(tempInput);
// 	$('#current-unit-text').html(unitInput);

// 	$('.unit-selection').val()

// 	$('#newtemp').html(((tempInput - 32) * 5 / 9) + '&#176');

// 	var unitResult = $('.unit-selection input:not(:checked)').val();
// 	$('#newunit').html(unitResult);
// })

