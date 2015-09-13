var express = require('express');
var app = express();

app.static
app.get('/', function(req, res){
   res.send('Hello world');
});

var server = app.listen(process.env.PORT || 3000, function(){
   var host = server.address().address;
   var port = server.address().port;

   console.log('Server Listening to ' + host + ':' + port);
});