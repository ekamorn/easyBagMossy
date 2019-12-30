$(document).ready(function(e) {
	
	
	// Global Variables 
	let productprice = "productprice";
	let interest_rate = 2.5;
	let atLeast_rate = 20000;
	var months = "-months";
	
	
	
	
	
	
	// First Mock Price 
	var first_price = $('#'+productprice).val();
	addValue(first_price);
	
	
	
	// Key up number of price
	$('#'+productprice).on('keyup', function(e) {
		
		var price = $(this).val();
		addValue(price);
		
	});
	
	
	
	
	
	// ================= Calculate Function =================
	function calculate(input, months) {
		
		var profit_rate;
		var principle_rate;
		var total_rate;
		if (input <= atLeast_rate) {
			profit_rate = 500;
		}
		else {
			profit_rate = Math.floor(input*interest_rate/100);	
		}
			
		principle_rate = Math.floor(input/months);
		total_rate = profit_rate + principle_rate;
		return [profit_rate, principle_rate, total_rate];
	}
	
	
	
	
	
	
	//================= Add Value Function ================
	function addValue(data) {
		
		for (var i = 3; i < 7; i++) {
			
			var all_rates = calculate(data, i);
			var profit_rate = all_rates[0];
			var principle_rate = all_rates[1];
			var total_rate = all_rates[2];
			$('#'+i+months).html(total_rate);
		}
		
	}
});