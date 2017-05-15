var button = document.querySelector('#click-me').onclick = calculate;
var numberSolution = document.querySelector('#solution');
var drinkSolution = document.querySelector('#drink');

function calculate () {
  var currentAge = document.querySelector('#age').value;
  var maxAge = document.querySelector('#max-age').value;
  var drinksPerDay = document.querySelector('#num-per-day').value;
  var drinkDropdown = document.querySelector('#dropdown').value;
    
  var x = currentAge;
  var y = maxAge;
  var z = drinksPerDay;
  
  var yearsLeft = y - x;
  var daysLeft = yearsLeft * 365;
  var result = daysLeft * z;
  
  numberSolution.innerHTML = result;
  var drinkResult = drinkDropdown;
  drinkSolution.innerHTML = drinkResult;
}