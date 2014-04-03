$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

  // PUT STUFF HERE

  var numBalls = 100;

  var balls = [];

  for (i = 0; i < numBalls; i++) {
    var b0 = {
    x: canvas.width*Math.random(),
    y: canvas.height*Math.random(),
    radius: 4,
    vx: 50*Math.random(),
    vy: 50*Math.random()
  };

  balls.push(b0);

  };

  var c = ['blue', 'white', 'green', 'red', 'black', 'orange', 'yellow', 'yellow'];

  

  var drawCircle = function(x, y, r, color) {
    context.beginPath();
    context.arc(x, y, r, 0, 2*Math.PI);
    context.closePath();
    context.strokeStyle = 'black';
    context.stroke();
    context.fillStyle = color;
    context.fill();
  };
  // Run an interation of the game
  var updateGame = function() {
    // PUT STUFF HERE
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    for (var i = 0; i < balls.length; i++) {
        drawCircle(balls[i].x, balls[i].y, balls[i].radius, c[Math.floor(8*Math.random())]);
      }

      for (var i = 0; i < balls.length; i++) {

    balls[i].x = balls[i].x + balls[i].vx;
    balls[i].y = balls[i].y + balls[i].vy;

    if (balls[i].x>=781) {
      balls[i].vx = -balls[i].vx;
    };

    if (balls[i].x<=21) {
      balls[i].vx = -balls[i].vx;
    };

    if (balls[i].y<=21) {
      balls[i].vy = -balls[i].vy;
    };

    if (balls[i].y>=581) {
      balls[i].vy = -balls[i].vy;
    };

  };

  requestAnimationFrame(updateGame);
  };

  

  // Handle a canvas click event
  $('#game_canvas').click(function(e) {
    // Find the mouse x and y relative to the top-left corner of the canvas
    var xu = e.pageX - $(this).offset().left;
    var ye = e.pageY - $(this).offset().top;
    // PUT STUFF HERE
    var b1 = {
    x: xu,
    y: ye,
    radius: 10,
    vx: 50*Math.random(),
    vy: 50*Math.random()
    };

    balls.push(b1);
  
  });

  updateGame();
});
