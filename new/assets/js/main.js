;(function(){
	document.querySelector('.toggle').addEventListener('click', function(e) {
		if (document.body.className === 'fullscreen') {
			document.body.className = '';
		} else {
			document.body.className = 'fullscreen';
		}
	});
}())