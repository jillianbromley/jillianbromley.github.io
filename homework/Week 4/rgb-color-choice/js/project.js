var button = document.querySelector('#color-button').onclick = changeColor;
var text = document.querySelector('#colorful-text');
var background = document.querySelector('#wrapper');

function changeColor () {
  var red = document.querySelector('#red').value;
  var green = document.querySelector('#green').value;
  var blue = document.querySelector('#blue').value;
  
  var colorStr = 'rgb(' + red + ',' + green + ',' + blue + ')';
  text.innerHTML = colorStr;
  background.style.background = colorStr;
}