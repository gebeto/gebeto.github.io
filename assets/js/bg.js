var canvas = document.getElementById("space");
var c = canvas.getContext("2d");

var numStars = 1900;
var radius = '0.'+Math.floor(Math.random() * 9) + 1;
var focalLength = canvas.width * 2;
var warp = 0;
var centerX, centerY;
var PI2 = Math.PI * 2;

var stars = [], star;
var starSpeed = 0;
var i;

var animate = true;

initializeStars();

var displayPoint = new DisplayPoint();
displayPoint.init();

function executeFrame(){
  if(animate) {
    requestAnimationFrame(executeFrame);
  }
  displayPoint.update();
  moveStars();
  drawStars();
  starSpeed && scroll();
}

function initializeStars(){
  centerX = canvas.width / 2;
  centerY = canvas.height / 2;
  
  stars = [];
  for(i = 0; i < numStars; i++){
    star = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * canvas.width,
      o: '0.'+Math.floor(Math.random() * 99) + 1
    };
    stars.push(star);
  }
}

function moveStars(){
  for(i = 0; i < numStars; i++){
    star = stars[i];
    // star.z--;
    star.z -= 1 + starSpeed;
    
    if(star.z <= 0){
      star.z = canvas.width;
    }
  }
}

function drawStars(){
  var pixelX, pixelY, pixelRadius;
  
  // Resize to the screen
  if(canvas.width != window.innerWidth || canvas.width != window.innerWidth){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initializeStars();
  }
  if(warp==0) {
    c.fillStyle = "#000";
    c.fillRect(0,0, canvas.width, canvas.height);}
    c.fillStyle = "rgba(209, 255, 255, " + radius + ")";
    for(i = 0; i < numStars; i++){
      star = stars[i];
      
      var starXCenter = star.x - centerX;
      var starYCenter = star.y - centerY;

      pixelX = starXCenter * (focalLength / star.z);
      pixelX += centerX;
      pixelY = starYCenter * (focalLength / star.z);
      pixelY += centerY;
      pixelRadius = 1 * (focalLength / star.z);

      pixelX += displayPoint.point.x / 20;
      pixelY += displayPoint.point.y / 20;


      // pixelX = canvas.width / 2 + (pixelX + Math.sin(star.z / canvas.width) * 100);
      // pixelY = canvas.height / 2 + (pixelY + Math.cos(star.z / canvas.width) * 100);
      // pixelY = pixelY * Math.cos(pixelY);

      c.fillRect(pixelX, pixelY, pixelRadius, pixelRadius);
      // c.fillRect(pixelX, pixelY, 1, 1);

      c.fillStyle = "rgba(209, 255, 255, " + star.o + ")";
  }
}

executeFrame();

document.addEventListener("wheel", function(e) {
  starSpeed += e.deltaY > 0 ? 1 : starSpeed > 3 ? -1 : 0;
});

function scroll() {
  if (Math.abs(starSpeed) < 0.5) {
    starSpeed = 0;
  } else {
    starSpeed *= 0.9;
  }
}