// HoursClocked ideas

/*
function Workday(day, norm, vac, sick, other, timeIn1, timeOut1, timeIn2,
	timeOut2, regHours, otHours) {
		this.day = day;
		this.norm = norm;
		this.vac = vac;
		this.sick = sick;
		this.other = other;
		this.timeIn1 = timeIn1;
		this.timeOut1 = timeOut1;
		this.timeIn2 = timeIn2;
		this.timeOut2 = timeOut2;
		this.regours = regHours;
		this.otHours = otHours;
};
*/
var date = new Date(); //sets initial date to today

/**
 * setDate is called on click of setDate button. Gets the value entered in the
 * date input, parses the string into integers for year, month and day, adds
 * a leading zero when needed (with pad2), uses this info to make a new date,
 * and finally calls printWorkday with the new date. The entire function allows
 * the user to change the start day of the pay period.
 * @function
 */
function setDate() {
	var n = ((document.getElementById('start-date').value));
	if (n != '') {
		var year = parseInt(n.slice(0,4));
		var month = pad2(parseInt(n.slice(5,7)));
		var day = pad2(parseInt(n.slice(8)));
		var dateEntered = year + ', ' + month + ', ' + day;
		date = new Date(dateEntered);
		printWorkday();
	}
}

function printWorkday() {
	for (var i = 0; i < 14; i++) {
		document.getElementById('wrapper' + i).innerHTML =
			'<form class="day">' +
				'<p class="date"><strong>' + date.toDateString() + '</strong></p>' +
				'<div class="little-column1">' +
					'<input type="radio" name="type" id="norm1" value="norm"><label for="norm1">Norm</label><br>' +
					'<input type="radio" name="type" id="vac1" value="vac"><label for="vac1">Vac</label><br>' +
					'<input type="radio" name="type" id="sick1" value="sick"><label for="sick1">Sick</label><br>' +
					'<input type="radio" name="type" id="other1" value="other"><label for="other1">Other</label><br>' +
				'</div>' +
				'<div class="little-column2">' +
					'<label class="in-out-label">IN</label><input type="time" name="in1"data-bind="value: in1"><br>' +
					'<label class="in-out-label">OUT</label><input type="time" name="out1" data-bind="value: out1"><br>' +
					'<label class="in-out-label">IN</label><input type="time" name="in2" data-bind="value: in2"><br>' +
					'<label class="in-out-label">OUT</label><input type="time" name="out2" data-bind="value: out2"><br>' +
				'</div>' +
				'<div class="little-column3" data-bind="addTime">' +
					'<p><strong>Hours Clocked</strong></p>' +
					'<p>Regular: <span id="reg-hours" data-bind="text: addTime"</span></p>' +
					'<p>Overtime: <span id="ot-hours" data-bind="text: ot_hours"</span></p>' +
					'<button type="button">Reset</button>' +
				'</div>' +
			'</form>'
		date.setDate(date.getDate() + 1); //getDate is a js method that gets the day of the month
	}
}

printWorkday();
/*
function addTime() {
	var clockIn, clockOut, minutesWorked, otMinutes, otHours, regMinutes, regHours;
	var x = document.getElementById('in');
	var y = document.getElementById('out');
	clockIn = convertTimeToMinutes(x.value);
	clockOut = convertTimeToMinutes(y.value);
	minutesWorked = clockOut - clockIn;
	console.log(minutesWorked);
	dayTotal = [];
	dayTotal.push(minutesWorked);
	if (minutesWorked > 480) {
		minutesOfOvertime = minutesWorked - 480;
		otHours = parseInt(minutesOfOvertime / 60)
		otMinutes = minutesOfOvertime % 60;
		regHours = 8;
		regMinutes = 0;
	} else {
		regHours = parseInt(minutesWorked / 60);
		regMinutes = minutesWorked % 60;
		otHours = 0;
		otMinutes = 0;
	}
	var regResult = pad2(regHours) + ':' + pad2(regMinutes);
	var otResult = pad2(otHours) + ':' + pad2(otMinutes);
	document.getElementById('reg-hours').innerHTML = regResult;
	document.getElementById('ot-hours').innerHTML = otResult;
};

function convertTimeToMinutes(time) {
	console.log(time)
	return parseInt(((time.slice(0,2)) * 60)) + parseInt(time.slice(3));
}; */

function pad2(num) {
	return (num < 10 ? '0' : '') + num;
}
