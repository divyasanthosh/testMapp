var express = require('express');
var app = express();

app.use(express.static(__dirname + '/views'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/',function(req ,res){
	res.render('login');
});


app.get('/svg', function(req , res){
	res.sendFile(__dirname + '/svg.html');
});

  app.listen(8085);
 
