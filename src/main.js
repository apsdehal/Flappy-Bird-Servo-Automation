$(document).ready(function () {
	$("#train button").click(function () {
		window.Q = JSON.parse(localStorage.getItem('q'));
	});

	$("#untrain button").click(function () {
		MainScreen.prototype.initWithoutReset();
	});
	window.tries = 0;
	window.LineChart = new ChartClass();
	LineChart.init();
});


function getAverage() {
	var k = window.times;
	var sum = 0;
	for(var i = 0; i < k.length; k++) {
		sum += k[i];
	}
	return sum / k.length;
}
function ChartClass() {
	this.canvasElement = $("#score-chart")[0];
	this.canvasElementContext = this.canvasElement.getContext('2d');
}


ChartClass.prototype.init = function () {
	var self = this;
	var data = {
		labels: [],
	  	datasets: [{
	        label: "Tries",
	        fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
	  		data: []
	  	}]
	};

	this.chart = new Chart(self.canvasElementContext).Line(data);
};

ChartClass.prototype.addData = function (label, value) {
	this.chart.addData([value], label);
	this.chart.update();
};

ChartClass.prototype.clear = function () {

};
