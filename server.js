var express = require('express');
var app = express();

app.use('/',express.static(__dirname + '/'));
app.use('/app',express.static(__dirname + '/app'));

app.get('/', function(req, res) {
   res.sendFile(__dirname + '/index.html');
});

var server = app.listen(process.env.PORT || 3000, function(){
   var host = server.address().address;
   var port = server.address().port;

   console.log('Server Listening to ' + host + ':' + port);
});