var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var winHeight = window.innerHeight, 
    winWidth = window.innerWidth;

ctx.canvas.width = winWidth;
ctx.canvas.height = winHeight;

var bgChange = false;

function randomColor() {
    var color = '#';
    for (var i = 0; i < 3; i++) {
        var part = Math.round(Math.random() * 15).toString(16);
        color += (part.length == 1 ? part+'0' : part);
    }
    return color;
}

function randomInt(min, max) {
    return Math.random() * (max - min) + min;
}

function mainLoop() {
    ctx.fillStyle = randomColor();
    fillWindow(
        Math.round(Math.random() * randomInt(-100, winWidth+500)),
        Math.round(Math.random() * winHeight)
    );
    if (bgChange) document.body.style.backgroundColor = randomColor();
    window.requestAnimationFrame(mainLoop);
}

function fillWindow(x, y) {
    var ind = Math.round(Math.random() * 6);
    console.log(ind);
    // var phrase = ['СПІДНИЦЯ', 'ПРОЇБАЛА', 'ВСІ', 'РЖАЛИ', 'НІХТО', 'НЕ СКАЗАЛИ'][ind]
    var phrase = ['ГІМНОКОДЕР', 'ЧМО', 'ЛОХ', 'ПОВТОРКА', 'ХУЙ', 'НЕМА РОБОТИ', 'БОМЖ'][ind]
    var fnt = Math.round(Math.random() * 50);
    ctx.font = fnt + 'px Arial';
    ctx.fillText(phrase, x, y);
 }

mainLoop();

document.addEventListener('keypress', function(event) {
	bgChange = !bgChange;
});

document.addEventListener('click', function() {
	bgChange = !bgChange;
});
