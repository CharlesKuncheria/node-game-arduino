var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var five = require("johnny-five"),
  board, potentiometer;

board = new five.Board();

board.on("ready", function() {
    
    io.on('connection', function(socket){
      console.log('io connection established');
    });

    http.listen(3000, function(){
      console.log('listening on *:3000');
    });

    // Create a new `potentiometer` hardware instance.
    potentiometer = new five.Sensor({
        pin: "A2",
        freq: 500
    });

    // Inject the `sensor` hardware into
    // the Repl instance's context;
    // allows direct command line access
    board.repl.inject({
        pot: potentiometer
    });

   // "data" get the current reading from the potentiometer
   potentiometer.on("data", function() {
     io.emit('pot-value', this.value);
   });
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static(__dirname + '/public'));

