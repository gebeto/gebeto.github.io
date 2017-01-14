$(document).ready(function(){
	$$.ajax({
		url: 'tutorials/tutorials.json',
		type: 'GET',
		dataType: 'json',
	})
	.done(function(res) {
		console.log(res);
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	







});