var express = require("express");
var ejs = require("ejs");
var app = express();


///////////////////////////////////////////////////////////////////////////////
// APP CONFIGURATION                                                         //
///////////////////////////////////////////////////////////////////////////////
//configure logging
app.use(express.logger());
//make files in static folder publicly accessible
app.use('/static', express.static(__dirname + '/static'));
//use ejs for html templates
app.engine('html', ejs.renderFile);


///////////////////////////////////////////////////////////////////////////////
// APP ROUTES                                                                //
///////////////////////////////////////////////////////////////////////////////
//default route
app.get('/', function(req, res) {
  res.render('index.html', { });
});

app.get('/test', function(req, res) {
  res.render('test.html', { });
});

app.get('/calc', function(req, res) {
  res.render('calc.html', { });
});
app.get('/stuff', function(req, res) {
  res.render('stuff.html', { });
});
app.get('/imgrr', function(req, res) {
  res.render('imgrr.html', { });
});
app.get('/canvas', function(req, res) {
  res.render('canvas.html', { });
});
app.get('/funcs', function(req, res) {
  res.render('funcs.html', { });
});
app.get('/ball', function(req, res) {
  res.render('ball.html', { });
});
app.get('/chain-reaction', function(req, res) {
  res.render('chain-reaction.html', { });
});

var faa = ["Every US president has worn glasses (just not always in public).", "Salt Lake City has a law against carrying an unwrapped ukulele on the street.", "A snail can have 25,000 teeth.", "No matter where you stand in Michigan, you are never more than 85 miles from a Great Lake.", "No matter where you stand in Michigan, you are never more than 85 miles from a Great Lake.", "It is physically impossible for pigs to look up in the sky."];

app.get('/fact', function(req, res) {
  res.render('fact.html', {f: faa[Math.floor(Math.random() * 6)]
    });
});
app.get('/facts', function(req, res) {
  res.render('facts.html', {faa: faa});
});

app.get('/submit_fact', function(req, res){
  var inputtext = req.query['fact'];
  faa.push(inputtext);
  res.redirect('/facts');
});

///////////////////////////////////////////////////////////////////////////////
// RUN CONFIGURATION                                                         //
///////////////////////////////////////////////////////////////////////////////
var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
    console.log("Listening on " + port);
});
