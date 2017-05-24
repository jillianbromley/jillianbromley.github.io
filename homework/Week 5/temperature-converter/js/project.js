



// var button = document.querySelector('#submit').onclick = calculate;
// var tempSolution = document.querySelector('#newtemp');
// var unitSolution = document.querySelector('#newunit');

// function calculate () {
// 	var currentTempJs = document.querySelector('#current-temp-input').value;
// 	document.getElementById('current-temp-text').innerHTML = currentTempJs;

// 	var currentUnitJs = document.querySelector('#dropdown').value;
// 	console.log(currentUnitJs);
// 	document.getElementById('current-unit-text').innerHTML = currentUnitJs;

// 	if (currentUnitJs == 'Farenheit') {
// 	  currentTempJs = parseInt(currentTempJs);
// 	  tempSolution = (currentTempJs - 32) * 5 / 9;
// 	  document.getElementById('newtemp').innerHTML = tempSolution.toFixed(2) + '&#176';
// 	  unitSolution = 'Celcius';
// 	  document.getElementById('newunit').innerHTML = unitSolution;

// 	} else {
// 		currentTempJs = parseInt(currentTempJs);
// 		tempSolution = (currentTempJs * 9 / 5 + 32);
// 		document.getElementById('newtemp').innerHTML = tempSolution.toFixed(2) + '&#176';
// 		unitSolution = 'Farenheit';
// 		document.getElementById('newunit').innerHTML = unitSolution;
// 	}
