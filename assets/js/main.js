
document.addEventListener("mousemove", function(e) {
  mouse.x = (window.innerWidth/2 - e.clientX) / 30;
  mouse.y = (window.innerHeight/2 - e.clientY) / 30;
});

