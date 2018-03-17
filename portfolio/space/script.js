var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var PI2 = Math.PI * 2;

var w = canvas.width = window.innerWidth;
var h = canvas.height = window.innerHeight;
canvas.style.width = w + 'px';
canvas.style.height = h + 'px';
ctx.lineWidth = 1.5;
ctx.strokeStyle = 'white';

var layers = [];
function Star(layerIndex) {
  this.layerIndex = layerIndex;
  this.origLayerIndex = this.layerIndex;
  this.x = Math.random() * (w + 200) - 100;
  this.y = Math.random() * (h + 200) - 100;
  this.origX = this.x;
  this.origY = this.y;
}

Star.prototype.draw = function() {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.layerIndex, 0, PI2);
  ctx.stroke();
}

Star.prototype.move = function(x, y) {
  this.x = this.origX + x * (0.01 + this.layerIndex / 50);
  this.y = this.origY + y * (0.01 + this.layerIndex / 50);
}

function Planet() {
  this.x = w / 2;
  this.y = h / 2;
  this.origX = this.x;
  this.origY = this.y;
  this.radius = 100;
  this.cradius = this.radius + 50;
  this.mv = 20;
}

Planet.prototype.drawBackCircle = function(radius, y) {
  y = y || 0;
  ctx.beginPath();
  ctx.moveTo(this.x - radius,this.y - this.mv);
  ctx.bezierCurveTo(
    this.x - radius, this.y - y - 50 - this.mv,
    this.x + radius, this.y - y - 50 + this.mv,
    this.x + radius, this.y + this.mv
  );
  ctx.stroke();
}

Planet.prototype.drawFrontCircle = function(radius, y) {
  y = y || 0;
  ctx.beginPath();
  ctx.moveTo(this.x - radius,this.y - this.mv);
  ctx.bezierCurveTo(
    this.x - radius, this.y + y + 50 - this.mv,
    this.x + radius, this.y + y + 50 + this.mv,
    this.x + radius, this.y + this.mv
  );
  ctx.stroke();
}

Planet.prototype.draw = function() {
  this.drawBackCircle(this.cradius);
  this.drawBackCircle(this.cradius + 10, 4);
  
  ctx.beginPath();
  ctx.arc(this.x, this.y, 100, 0, PI2);
  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.stroke();
  
  this.drawFrontCircle(this.cradius);
  this.drawFrontCircle(this.cradius + 10, 12);
}

Planet.prototype.think = function(x, y) {
  // this.mv = y / 50;
  // this.mv = y / 50;
  this.mv = y / 100 + x / 100;
  this.x = this.origX + x / 30;
  this.y = this.origY + y / 30;
}

function StarsLayer(index) {
  this.stars = [];
  for (var i = 0; i < 400 / (index*2); i++) {
    this.stars.push(new Star(index));
  }
}

StarsLayer.prototype.draw = function() {
  for (var i = 0; i < this.stars.length; i++) {
    this.stars[i].draw();
  }
}

StarsLayer.prototype.move = function(x, y) {  
  for (var i = 0; i < this.stars.length; i++) {
    this.stars[i].move(x, y);
  }
}

StarsLayer.prototype.each = function(cb) {
  for (var i = 0; i < this.stars.length; i++) {
    cb(this.stars[i], i, this.stars);
  }
}

// function createStarsLayer(index) {
//   for (var i = 0; i < 100; i++) {
//     layers.push(new Star(index));
//   }
// }

var s1 = new StarsLayer(1);
var s2 = new StarsLayer(2);
var s3 = new StarsLayer(3);
var planet = new Planet();
// createStarsLayer(1);
// createStarsLayer(2);
// createStarsLayer(3);

(function loop() {
  // ctx.clearRect(0,0,w,h);
  ctx.fillRect(0,0,w,h);
  s1.draw();
  s2.draw();
  // for (var i = 0; i < layers.length; i++) {
  //   layers[i].draw();
  // }
  planet.draw();
  s3.draw();
  requestAnimationFrame(loop);
})()

canvas.addEventListener('mousemove', function(e) {
  var x = e.layerX - w/2;
  var y = e.layerY - h/2;
  s1.move(x, y);
  s2.move(x, y);
  s3.move(x, y);
  // for (var i = 0; i < layers.length; i++) {
  //   layers[i].move(x, y);
  // }
  planet.think(x, y);
});