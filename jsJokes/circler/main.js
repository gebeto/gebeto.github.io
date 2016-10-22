var rangerVal = document.querySelector('#range');
function ranger() {
    ctx.clearRect(0, 0, width, height);
    n = 0;
    someAngle = rangerVal.value;
}

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var height = window.innerHeight;
var width = window.innerWidth;

ctx.canvas.width = width;
ctx.canvas.height = height;

function randomColor() {
    var color = '#';
    for (var i = 0; i < 3; i++) {
        var part = Math.round(Math.random() * 15).toString(16);
        color += (part.length == 1 ? part+'0' : part);
    }
    return color;
}


var n = 0;
var c = 2;
var draw = true;
var someAngle = 137.5;

function mainLoop() {
//    var a = n * 137.5;
    ctx.strokeStyle = randomColor();
    ctx.fillStyle = randomColor();
    var a = n * someAngle;
    var r = c * Math.sqrt(n);
    
    var x = r * Math.cos(a) + width/2;
    var y = r * Math.sin(a) + height/2;
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI*2);
    ctx.stroke();
    ctx.fill();
    n+=15;
    window.requestAnimationFrame(mainLoop);
}

mainLoop();