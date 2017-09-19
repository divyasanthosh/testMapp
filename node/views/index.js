var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
	console.log('hi');
  fs.readFile('/app.html', function(err, data) {
  	console.log('file reading html file');
    res.writeHead(200, {'Content-Type': 'text/html'});
     res.write(data);
    res.end("divya");
  });
}).listen(8080);