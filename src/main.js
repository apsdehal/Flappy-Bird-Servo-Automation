$(document).ready(function () {
	$("#train button").click(function () {
		console.log('hi');
		window.Q = JSON.parse(localStorage.getItem('q'));
	});
});