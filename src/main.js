$(document).ready(function () {
	$("#train button").click(function () {
		window.Q = JSON.parse(localStorage.getItem('q'));
	});

	$("#untrain button").click(function () {
		MainScreen.prototype.initWithoutReset();
	});
});