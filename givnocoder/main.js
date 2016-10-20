var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var winHeight = window.innerHeight, 
    winWidth = window.innerWidth;

ctx.canvas.width = winWidth;
ctx.canvas.height = winHeight;

function randomColor() {
    var color = '#';
    for (var i = 0; i < 3; i++) {
        var part = Math.round(Math.random() * 15).toString(16);
        color += (part.length == 1 ? part+'0' : part);
    }
    return color;
}

function mainLoop() {
    ctx.fillStyle = randomColor();
    fillWindow(
        Math.round(Math.random() * winWidth-100),
        Math.round(Math.random() * winHeight)
    );
//    document.body.style.backgroundColor = randomColor();
    window.requestAnimationFrame(mainLoop);
}

function fillWindow(x, y) {
    var ind = Math.round(Math.random() * 2);
    console.log(ind);
    var phrase = ['ГІМНОКОДЕР', 'ЧМО', 'ЛОХ'][ind]
    var fnt = Math.round(Math.random() * 50);
    ctx.font = fnt + 'px Arial';
//    ctx.fillText('Єбать ти ЛОХ', x, y);
    ctx.fillText(phrase, x, y);
 }

mainLoop();