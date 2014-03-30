$(document).ready(function() {
  //initialize canvas
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var width = canvas.width;
  var height = canvas.height;
  var drawCircle = function(x, y, r, color) {
    context.beginPath();
    context.arc(x, y, r, 0, 2*Math.PI);
    context.closePath();
    context.strokeStyle = color;
    context.stroke();
    context.fill();
  };
  var ball = {
    x: 20,
    y: 20,
    radius: 20,
    vx: 5,
    vy: 5
  };
  //PUT STUFF HERE

  //run an iteration of the game
  var updateGame = function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle(ball.x, ball.y, ball.radius, "black");
    ball.x = ball.x + ball.vx;
    ball.y = ball.y + ball.vy;

    if (ball.x>=781) {
      vx = -vx;
    };

    if (ball.x<=21) {
      vx = -vx;
    };

    if (ball.y<=21) {
      vy = -vy;
    };

    if (ball.y>=581) {
      vy = -vy;
    };

    setTimeout(updateGame, 10);
  };

  updateGame();
});
