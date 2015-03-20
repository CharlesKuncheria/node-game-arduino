var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
    
io.on('connection', function(socket){
  console.log('io connection established');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/test', function(req, res){
  res.sendFile(__dirname + '/indextest.html');
});

app.use(express.static(__dirname + '/public'));

