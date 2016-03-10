$(document).ready(function() {
  var socket = io.connect('http://localhost:8080');
  $('#button').click(function(e){
    socket.emit('click');
    e.preventDefault();
  });
})
