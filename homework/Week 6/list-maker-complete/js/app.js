// Users should be able to:
// 1. Enter an item into #item
// 2. Click on #clickme
// 3. New item is appended as a <li> element to the #list
// 4. After item is added, the text inside #item should clear

// Requirements: Create a separate function, called appendItem, that accepts one argument, item, that is called when #clickme is clicked and appends the <li> to #list

// Bonus: Focus on #item after the item is added (hint: look up "jquery focus")
// Itermediate Bonus: If the value of #item is blank, do not append the <li> and alert user (hint: use an if/else statement)
// Legendary Bonus: Remove individual <li> elements when they are clicked (hint: use $(this) and .remove())


$(document).ready(function () {
	$('#clickme').click(function() {
		var newItem = $('#item').val();
		appendItem(newItem);
	})

function appendItem(list){
	if (list == '') {
		alert('You did not enter an item!');
	} else {
		var output = '<p>' + list + '</p>';
		$('#list').append(output);
		$('#item').val('').focus();
 	}
}

})

