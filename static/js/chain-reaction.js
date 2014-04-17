$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

  // PUT STUFF HERE

  var numBalls = 10;

  var levels = [{num: 1, minReactions: 1, numBalls: 5},
                {num: 2, minReactions: 5, numBalls: 8},
                {num: 3, minReactions: 12, numBalls: 10},
                {num: 4, minReactions: 20, numBalls: 15},
                {num: 5, minReactions: 29, numBalls: 17},
                {num: 6, minReactions: 40, numBalls: 20},
                {num: 7, minReactions: 60, numBalls: 27},
                {num: 8, minReactions: 88, numBalls: 38},
                {num: 9, minReactions: 120, numBalls: 48}
                ];

  var curLevel = 0;

  var levelText = "Level 1 - React 1 out of 5 balls";

  var reactions = [];

  var numReacted = 0;

  var gameState = 'menu';

  var menuText = 'Click to play';

  var balls = [];

  var reacting = false;

  for (i = 0; i < numBalls; i++) {
    var b0 = {
    x: canvas.width*Math.random(),
    y: canvas.height*Math.random(),
    radius: 10,
    vx: 5*Math.random(),
    vy: 5*Math.random()
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

    context.clearRect(0, 0, canvas.width, canvas.height);

    if (gameState === 'menu') {
      context.fillStyle = 'green';
  context.font = "40px Arial";
  context.fillText(menuText, 100, 200)
    }

    else if (gameState === 'playing') {

    for ( var i = 0; i < balls.length; i++) {
      var collided = false;
    for ( var j = 0; j < reactions.length; j++) {
      
        var dist = Math.sqrt((balls[i].x - reactions[j].x) * (balls[i].x - reactions[j].x) + (balls[i].y - reactions[j].y) * (balls[i].y - reactions[j].y));
        
        if (dist < 40) {
          collided = true;
          var r1 = {
            x: balls[i].x,
            y: balls[i].y,
            radius: 1,
            timer: 0
          }
          numReacted += 1;
          reactions.push(r1);
          balls.splice(i, 1);
          
        }

        } if (collided) {
          i--;
        }

}
    // PUT STUFF HERE
    
    
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

  for (var k = 0; k < reactions.length; k++) {

    reactions[k].timer += 1;

    

    if (reactions[k].timer>200) {
      reactions[k].radius -= 1;
    }

    else if (reactions[k].radius < 30) {
      reactions[k].radius = reactions[k].radius + 1;

    }

    if (reactions[k].radius === 0) {
      reactions.splice(k,1);
      k--;
    }

  

  for (var i = 0; i < reactions.length; i++) {
        
        drawCircle(reactions[i].x, reactions[i].y, reactions[i].radius, c[Math.floor(8*Math.random())]);
        
      }

  
}
  context.fillStyle = 'blue';
  context.font = "20px Arial";
  context.fillText('Reactions: ' + numReacted, 10, 20);
  context.fillText(levelText, 10, 50);

  if (reacting='true') {
    if (reactions.length === 0) {
      menuText = 'GameOver! You reacted ' + numReacted + ' balls';
      gameState = 'menu';
      if (curLevel === levels.length) {
         curLevel = 0;
         menuText = 'You had to beat it, huh. Click to Play again! -.- NOW!!'
        }
      if (numReacted>=levels[curLevel].minReactions) {
        curLevel += 1;
        menuText = 'Congrats! -.- Click for more. NOW';

      }
      else {
        menuText = 'Hahahahaha! Try again :p';
      }
    }
  }

}

  requestAnimationFrame(updateGame);

  };

  

  // Handle a canvas click event
  $('#game_canvas').click(function(e) {

    if (gameState === 'menu') {
      gameState = 'playing';
      reacting = false;
      numReacted = 0;
      balls = [];


  for (i = 0; i < levels[curLevel].numBalls; i++) {
    var b0 = {
    x: canvas.width*Math.random(),
    y: canvas.height*Math.random(),
    radius: 10,
    vx: 5*Math.random(),
    vy: 5*Math.random()
  };

  balls.push(b0);

  };
  levelText = "Level " + levels[curLevel].num + " - React " + levels[curLevel].minReactions + " out of " + levels[curLevel].numBalls + " balls";
    }

    if (gameState = 'playing') {
    
    if (reacting === false) {
    // Find the mouse x and y relative to the top-left corner of the canvas
    var xu = e.pageX - $(this).offset().left;
    var ye = e.pageY - $(this).offset().top;
    // PUT STUFF HERE
    /*var b1 = {
    x: xu,
    y: ye,
    radius: 10,
    vx: 50*Math.random(),
    vy: 50*Math.random()
    };

    balls.push(b1);
  
  });*/

  reacting = true;

  var r0 = {
    x: xu,
    y: ye,
    radius: 1,
    timer: 0
  };

  reactions.push(r0);
}
}

});

  updateGame();
});
