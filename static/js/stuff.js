alert('Welcome to my stuff only page!'); // edit me!

// Problem 1 (Say Hello!) ---------------------------------------------------
$('#say_hello').click(function() {
  alert('Hello World!')
});


// Problem 2 (Houdini) ------------------------------------------------------
$('#disappear').click(function() {
  $('#houdini_text').hide();
});

$('#reappear').click(function() {
  $('#houdini_text').show();
});


$('#turnpink').click(function() {
	$('#tickled_text').css('color', 'pink')
});


$('#mane').click(function(){
	alert('Hope you have a good day ' + $('#my_name').val() + '!!')
});
