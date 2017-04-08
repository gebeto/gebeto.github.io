window.onload = function() {

  var filesDialog = document.getElementById('files');

  filesDialog.addEventListener('change', function (e) {
    var files = this.files;
  	console.log(files[0]);
  	for (var i = 0; i < files.length; i++) {
  		// createImageWithFile(files[i], i);
      var im = new Image();
  	}
  });

  
  var canvas = document.createElement('canvas');
  document.body.appendChild(canvas);
  var ctx = canvas.getContext('2d');

  var w = 0;
  var h = 0;
  ctx.font = '20px Arial';
  setInterval(function(){
  	w = Math.random() * 300;
  	h = Math.random() * 150;
  	ctx.fillText('Ромко лох', w, h);
  }, 60)

}


