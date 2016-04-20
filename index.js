var
// app = require('http').createServer(handler),
//      io = require('socket.io').listen(app),
//      fs = require('fs'),
   five = require('johnny-five');

// app.listen(8080);

// function handler (req, res) {
//   fs.readFile(__dirname + '/index.html',
//   function (err, data) {
//     if (err) {
//       res.writeHead(500);
//       return res.end('Error loading index.html');
//     }

//     res.writeHead(200);
//     res.end(data);
//   });
// }

board = new five.Board();

board.on("ready", function() {
  // var servo = new five.Servo({
  //   pin: 5,
  //   range: [20, 120],
  //   startAt: 120
  // });

  // servo.sweep([20, 60]);
  // led = new five.Led(13);
  //

  var pinA1 = new five.Pin({
    pin: "A1"
  });

  var pin8 = new five.Pin({
    pin: 8
  });

  var pin9 = new five.Pin({
    pin: 9
  });

  pin8.high();
  pin9.low();

  this.loop(2000, function () {
    pinA1.query(function (state) {
      console.log(state);
    });
  });

  // io.sockets.on('connection', function (socket) {
    // socket.on('jump', function () {
      // led.on();
      // setTimeout(function () {
      //   led.off()
      // }, 5000);
    // });
  // });
});
