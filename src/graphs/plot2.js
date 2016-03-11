$(document).ready(function () {

	window.ChartClassMajorObject = new ChartClassMajor();
	ChartClassMajorObject.init();
});


function ChartClassMajor() {
	this.canvasLineElementAndroid = $("#line-chart-android")[0];
	this.canvasLineElementAndroidContext = this.canvasLineElementAndroid.getContext('2d');
	this.canvasBarElement = $("#line-chart-web")[0];
	this.canvasBarElementContext = this.canvasBarElement.getContext('2d');
}


ChartClassMajor.prototype.init = function () {
	var self = this;
	var data = {
		labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56"],
	  	datasets: [{
	        label: "Tries",
	        fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
	  		data: [0.602564,1.65957,0.615385,1.625,0.589744,1.02174,1.02128,1.27083,0.770492,0.602564,1.02128,0.979167,1.6383,0.623377,0.979167,1.29787,0.803279,1.55102,0.631579,0.958333,1.06522,0.959184,1.2766,0.8,0.979167,0.94,1.29787,0.770492,1.04255,1.57143,0.61039,0.957447,1.4,0.746032,1.68085,0.594937,1.01613,0.761905,1.58333,0.618421,1.02128,0.979167,1.02128,1.25,0.8,0.958333,1.02174,0.978723,1.3913,0.734375,0.978723,1.02174,1.04255,1.22449,0.8,0.958333,1.02174]
	  	}]
	};


	var data2 = {
		labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56"],
	  	datasets: [{
	        label: "Tries",
	        fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
	  		data: [127, 46, 4, 11, 3, 3, 3, 16, 3, 7, 10, 4, 4, 5, 10, 10, 11, 116, 107, 16, 14, 63, 3, 5, 5, 63, 5, 12, 61, 17, 7, 4, 3, 6, 7, 15, 4, 18, 102, 3, 10, 3, 3, 5, 3, 3, 10, 13, 9, 10, 3, 3, 3, 5, 4, 4]
	  	}]
	};





	this.lineChart = new Chart(self.canvasLineElementAndroidContext).Line(data);
	this.barChart = new Chart(self.canvasBarElementContext).Line(data2);
};

ChartClassMajor.prototype.addData = function (label, value) {
};

ChartClassMajor.prototype.clear = function () {

};
