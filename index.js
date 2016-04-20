var app = require('http').createServer(handler),
io = require('socket.io').listen(app),
fs = require('fs'),
five = require('johnny-five');

app.listen(8080);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

var trainData = JSON.parse(fs.readFileSync('data/training-data.json'));

board = new five.Board();

var MAX_ANGLE = 70;
var MIN_ANGLE = 40;
var STEPS = 5;
var isTapFromMotorEnabled = 0;
board.on('ready', function() {
  var servo = new five.Servo({
    pin: 5,
    range: [MIN_ANGLE, MAX_ANGLE],
    startAt: MAX_ANGLE,
  });

  led = new five.Led(13);

  var pinA1 = new five.Pin({
    pin: 'A1'
  });

  var pin8 = new five.Pin({
    pin: 8
  });

  var pin9 = new five.Pin({
    pin: 9
  });

  pin8.high();
  pin9.low();

  // var isMax = 0;
  // servo.on('move:complete', function () {
  //   if (isMax) {
  //     servo.to(MAX_ANGLE, 200, STEPS);
  //     isMax = 0;
  //   } else {
  //     servo.to(MIN_ANGLE, 200, STEPS);
  //     isMax = 1;
  //   }
  // })

  var callbackOnMoveComplete = function () {

    servo.to(MAX_ANGLE, 50, STEPS);
    servo.removeAllListeners('move:complete', callbackOnMoveComplete);
  }

  var tapped = 0;

  var that = this;
  io.sockets.on('connection', function (socket) {
    socket.on('event:need-action', function (data) {
      var stateV = data['v'];
      var stateH = data['h'];
      var click_v = trainData[stateV][stateH]["click"];
      var do_nothing_v = trainData[stateV][stateH]["do_nothing"];
      if (click_v > do_nothing_v) {
        servo.to(MIN_ANGLE, 50, STEPS);
        servo.on('move:complete', callbackOnMoveComplete);
        pinA1.high();
      } else {
        socket.emit('event:take-action', 'do_nothing');
      }
    });

    if (isTapFromMotorEnabled) {

      pinA1.read(function (err, value) {
        if (value > 1000
          && tapped === 0
          ) {
          socket.emit('event:take-action', 'click' );
          tapped = 1;
        }
         else if (value < 1000) {
          tapped = 0;
        }
      })
    }

    pinA1.on('high', function () {
      socket.emit('event:take-action', 'click');
    });

  });
});
