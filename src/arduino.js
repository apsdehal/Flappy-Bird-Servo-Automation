$(document).ready(function() {
	var socket = io.connect('http://localhost:8080');
	$('#button').click(function(e){
		e.stopPropagation();
		socket.emit('jump');
		e.preventDefault();
	});
	window.socket = socket;
})
