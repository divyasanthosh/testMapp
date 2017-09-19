var app = require('express')();

app.get('/',function(req, res){
console.log("hai divya");
res.end('Hi Divya');

});

app.listen('3000');
