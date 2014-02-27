

$('#toggle_img').click(function(){

if ($('#toggle_img').text() === "Go Away!") {
	
	$('#main_img').hide()
	$('#toggle_img').text('Come Back')
	}
 else {
	
	$('#main_img').show()
	$('#toggle_img').text('Go Away!')
	}
});


$('#change_img').click(function(){
	alert("/static/img/" + $('#new_img_file').val())
	$('#main_img').attr('src', "/static/img/" + $('#new_img_file').val());
});




$('.clickable').click(function() {
  $(this).attr('width', '200px')
  alert($(this).attr('src'))
});

$('.images').click(function() {
  $(this).attr('width', '150px')
  $(this).attr('height', '150px')
  $('#mainimage').attr('src', $(this).attr('src'))
});
