$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  var drawSquare = function(x, y, sideLen, color) {
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + sideLen, y);
    context.lineTo(x + sideLen, y + sideLen);
    context.lineTo(x, y + sideLen);
    context.lineTo(x, y);
    context.closePath();
    context.strokeStyle = color;
    context.stroke();
    
  };

  var drawCircle = function(x, y, radius, color) {
    context.beginPath();
    context.arc(x, y, radius, 0, 2*Math.PI);
    context.closePath();
    context.strokeStyle = color;
    context.stroke();
  };

  var drawTriplet = function(x, y, radius, color) {
    drawCircle(x, y, radius, color);
    drawCircle(x - radius/2, y + radius, radius, color);
    drawCircle(x + radius/2.2, y + radius, radius, color);
  };

   var drawTriangle = function(x, y, sideLen, color) {
    context.fillStyle = color;
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + sideLen/2, y - sideLen/2);
    context.lineTo(x + sideLen, y);
    context.lineTo(x, y);
    context.closePath();
    
    context.fill();
  };

  var drawTriforce = function(x, y, sideLen, color) {
    drawTriangle(x, y, sideLen, color);
    drawTriangle(x + sideLen/2, y - sideLen/2, sideLen, color);
    drawTriangle(x + sideLen, y, sideLen, color);
  };

  $('#p1').click(function() {
    drawSquare(100, 200, 50, 'blue');
  });

  $('#p2').click(function() {
    drawSquare(300, 100, 25, 'green');
  });

  $('#p3').click(function() {
    drawCircle(100, 200, 50, 'red');
  });

  $('#p4').click(function() {
    drawCircle(300, 100, 25, 'black');
  });

  $('#p5').click(function() {
    drawSquare(200, 300, 100, 'red');
    drawCircle(200, 350, 50, 'green');
    drawCircle(300, 350, 50, 'green');
    drawCircle(250, 400, 50, 'green');
    drawCircle(250, 300, 50, 'green');
    drawCircle(250, 350, 50, 'blue');
  });

  $('#p6').click(function() {
    drawTriplet(200, 200, 50, 'green');
  });

  $('#p7').click(function() {
    drawTriplet(320, 200, 50, 'blue');
  });

  $('#p8').click(function() {
    drawTriplet(100, 200, 50, 'blue');
    drawTriplet(350, 300, 50, 'yellow');
    drawTriplet(300, 150, 50, 'black');
    drawTriplet(200, 300, 50, 'green');
  });

  $('#p9').click(function() {
    drawTriangle(200, 200, 50, 'blue');
  });

  $('#p10').click(function() {
    drawTriforce(250, 250, 50, 'blue');
  });

});
