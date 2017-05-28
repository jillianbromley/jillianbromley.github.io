
$(document).ready(function() {

  $('#a10').click(addTen);
  $('#a20').click(addTwenty);
  $('#a30').click(addThirty);
  $('#red').click(bgRed);
  $('#out').click(out);
  $('#blue').click(bgBlue);
  $('#n10').click(subTen);
  $('#n20').click(subTwenty);
  $('#n30').click(subThirty);
 
  function addTen () {
    var count = $('#out').html();
    count = parseInt(count);
    $('#out').html(count + 10);         
	}
  
  function addTwenty () {
    var count = $('#out').html();
    count = parseInt(count);
    $('#out').html(count + 20);
  }
  
  function addThirty () {
    var count = $('#out').html();
    count = parseInt(count);
    $('#out').html(count + 30);
  }
  
  function bgRed(){
    $('#out').css('background-color', 'red')
  }
  
  function out(){
    $('#out').html(0);
    $('#out').css('background-color', 'white')
  }
  
  function bgBlue(){
    $('#out').css('background-color', 'blue') 
  }

  function subTen() {
    var count = $('#out').html();
    count = parseInt(count);
    $('#out').html(count - 10);
  }
  
    function subTwenty () {
    var count = $('#out').html();
    count = parseInt(count);
    $('#out').html(count - 20);
  }
  
      function subThirty () {
    var count = $('#out').html();
    count = parseInt(count);
    $('#out').html(count - 30);
  }
  
	})