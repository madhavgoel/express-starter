 $(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

   $('#p1').click(function() {
    context.strokeRect(20, 20, 40, 80);
  });

 $('#p2').click(function() {
    context.strokeRect(20, 110, 40, 40);
  });

  $('#p3').click(function() {
	context.beginPath();
	context.arc(150, 100, 20, Math.PI/2, Math.PI/8);
	context.closePath();
	context.stroke();
  });

  $('#p4').click(function() {
	context.beginPath();
	context.arc(150, 150, 20, 0, 2*Math.PI);
	context.closePath();
	context.stroke();
  });

$('#p5').click(function() {
	context.moveTo(150, 200);
	context.lineTo(220, 200);
	context.stroke();
  });

$('#p6').click(function() {
	context.strokeStyle = "green";
    context.strokeRect(20, 200, 40, 80);
  });

$('#p7').click(function() {
	context.beginPath();
	context.arc(150, 250, 20, 0, 2*Math.PI);
	context.closePath();
	context.strokeStyle = "red";
	context.stroke();
	context.fillStyle = "red";
	context.fill();
	
  });

$('#p8').click(function() {
	context.fillStyle = "yellow";
    context.fillRect(20, 280, 40, 40);
    context.strokeStyle = "blue";
    context.strokeRect(20, 280, 40, 40);

  });

$('#p9').click(function() {
for (var i = 1; i <= 5; i++) {
        context.strokeRect(i * 50, 20, 50, 50);
}
});

$('#p10').click(function() {
for (var i = 1; i <= 100; i++) {
        context.strokeRect(i * 5, 60, 5, 5);
}
});

$('#p11').click(function() {
for (var i = 1; i <= 500; i++) {
	var i = i + 5;
	for (var k = 1; k <= 100; k++) {
        context.strokeRect(k * 5, i, 5, 5);
}}
});

});
