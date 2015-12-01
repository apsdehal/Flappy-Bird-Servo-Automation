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
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
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