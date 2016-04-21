module.exports = {
	isTapFromMotorEnabled: false,
	isVoltageThere: true,
	checkForMotor: function () {
		return this.isTapFromMotorEnabled;
	},
	checkForVoltage: function () {
		return this.isVoltageThere;
	},
	updateVoltage: function (codename) {
		if (codename === 'done') {
			this.isVoltageThere = true;
		} else {
			this.isVoltageThere = false;
		}
	},
	updateMotor: function () {
		this.isTapFromMotorEnabled = !this.isTapFromMotorEnabled;
	}
}
