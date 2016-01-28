var express = require('express');
var request = require('request');

var app = express();

var port = process.env.PORT || 8081;

app.set('port', process.env.PORT || 8081);

app.use('/src', express.static('./dist/src'));

app.get('/', function(req, res){
  var hostname = 'http://' + req.headers.host;
  req.pipe(request(hostname + '/src/views/index.html')).pipe(res);
});

var server = app.listen(port);
