console.log('Opening server');

var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

app.use(express.static('client'));

var io = require('socket.io')(server);

var saved = [];

io.on('connection', function (socket) {
  socket.on('message', function (msg) {
    saved.push(msg);
    io.emit('message', msg);
  });
  for(var i = 0; i < saved.length; i++) {
   socket.emit('message', saved[i]);
 }
});

server.listen(8080, function() {
  console.log('Chat server running...');
});
