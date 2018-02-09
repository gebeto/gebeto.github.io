var ctx;
var canvas;
var scanCodeButton;
var content;

document.addEventListener('deviceready', function() {
	scanCodeButton = document.getElementById('camera-scan');
	content = document.getElementById('content');
	
	scanCodeButton.addEventListener('click', function() {
		function onDone(err, status){
			if (err) {
				alert(err.message);
				console.error(err);
			}
			if (status.authorized) {
				
				QRScanner.scan(function(err, contents) {
					if(err) console.error(err._message);
					// alert('The QR Code contains: ' + contents);
					content.textContent = contents;
					QRScanner.destroy();
					QRScanner.hide();
				});

				QRScanner.show(function(status){
					content.textContent = '';
				 	console.log(status);
					// alert('SHOWN' + document.body.innerHTML);
				});
				
				// alert('HIDDEN' + document.body.innerHTML);
			}
		}
		QRScanner.prepare(onDone); // show the prompt 
	});

});