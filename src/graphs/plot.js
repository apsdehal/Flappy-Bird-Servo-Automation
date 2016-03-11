$(document).ready(function () {
	window.ChartClassMinorObject = new ChartClassMinor();
	ChartClassMinorObject.init();
});

function ChartClassMinor() {
	this.canvasLineElement = $("#line-chart")[0];
	this.canvasLineElementContext = this.canvasLineElement.getContext('2d');
	this.canvasBarElement = $("#bar-chart")[0];
	this.canvasBarElementContext = this.canvasBarElement.getContext('2d');
}


ChartClassMinor.prototype.init = function () {
	var self = this;
	var data = {
		labels: ["5", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55", "60",
				"65", "70", "75", "80", "85", "90", "95", "100", "105", "110", "115", "120",
				"125", "130", "135", "140", "145", "150", "155", "160", "165", "170", "175", "180",
				 "185", "190", "195", "200", "205", "210", "215", "220", "225", "230", "235", "240",
				 "245", "250", "255", "260", "265", "270", "275", "280", "285", "290", "295", "300",
				 "305", "310", "315", "320", "325", "330", "335", "340", "345", "350", "355", "360", "365",
				 "370", "375", "380", "385", "390", "395", "400", "405", "410", "415", "420",
				"425", "430", "435", "440", "445", "450", "455", "460", "465", "470", "475", "480", "485", "490", "495"],
	  	datasets: [{
	        label: "Tries",
	        fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
	  		data: [0, 0, 0, 0, 0, 1, 0, 0, 0, 1,
	  			   0, 3, 0, 0, 0, 5, 0, 0, 0, 0,
	  			   0, 0, 4, 0, 0, 3, 0, 5, 6, 6,
	  			   7, 7, 11, 5, 12, 15, 16, 18, 12, 13,
	  			   15, 16, 17, 19, 20, 21, 22, 23, 27, 40,
	  			   50, 60, 74, 78, 89, 95, 105, 110, 120, 140,
	  			   160, 150, 145, 150, 155, 165, 175, 160, 155, 160,
	  			   180, 190, 167, 200, 210, 215, 210, 220, 200, 160,
	  			   210, 250, 260, 220, 260, 210, 220, 240, 280, 290,
	  			   250, 260, 220, 230, 160, 220, 240, 330, 290, 320,
	  			   330, 200, 340, 360, 380, 360, 280, 330, 390, 330
	  			   ]
	  	}]
	};


	var radarData = {
	    labels: [ "0.2", "0.3", "0.4", "0.5", "0.6", "0.7", "0.8", "0.9" ],
	    datasets: [
	        {
	            label: "Hours",
	            fillColor: "rgba(151,187,205,0.2)",
	            strokeColor: "rgba(151,187,205,1)",
	            pointColor: "rgba(151,187,205,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(151,187,205,1)",
	            data: [ 22, 20, 18, 18, 15, 14, 15, 19 ]
	        }
	    ]
	};
	this.lineChart = new Chart(self.canvasLineElementContext).Line(data);
	this.barChart = new Chart(self.canvasBarElementContext).Radar(radarData);
};

ChartClassMinor.prototype.addData = function (label, value) {
};

ChartClassMinor.prototype.clear = function () {

};
