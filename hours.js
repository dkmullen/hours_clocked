/**hours.js*/
var reg_hours = ko.observable('0.00');
var ot_hours = ko.observable('0.00');
var in1 = '';
var out1 = '';
var in2 = '';
var out2 = '';

function ViewModel() {
	
	self.addTime = function() {
			var a = in1[0,1];
			var b = in1[2,3];
			var c = out1[0,1];
			var d = out2[2,3];
			var hours = c - a;
			if (d > b) { 
				var partialHours = d - b;
			} else {
				var partialHours = (b - 60) + d;
			}
			reg_hours = hours + '.' + partialHours;
		}	
		
		
	if (in1 != '' && out1 != '') {
		self.addTime();
	}
	
	/** 
	 * A helper function. 'e+2' and 'e-2' are ten squared and ten to the neg 2.
	 * The function effectively moves the decimal two places, rounds, and 
	 * moves it back.
	 * Source: https://blog.tompawlak.org/number-currency-formatting-javascript
	 * @function
	 */
	self.roundToTwo = function(num) {
		return +(Math.round(num + 'e+2')  + 'e-2');
	};
}
ko.applyBindings(new ViewModel());
