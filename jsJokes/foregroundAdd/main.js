var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var file = document.getElementById('file');

canvas.width = 720;
canvas.height = 720;

var foregroundImage = new Image();
foregroundImage.src = 'fore.png';


ctx.drawImage(foregroundImage, 0, 0);

document.getElementById('file').onchange = function (evt) {
    var tgt = evt.target || window.event.srcElement,
        files = tgt.files;

    // FileReader support
    if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = function () {
            document.getElementById('outImage').src = fr.result;
            ctx.drawImage(document.getElementById('outImage'), 0, 0);
			ctx.drawImage(foregroundImage, 0, 0);
        }
        fr.readAsDataURL(files[0]);
    }
}