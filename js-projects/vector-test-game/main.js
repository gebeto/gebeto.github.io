var canvas = document.querySelector('#canvas'),
	ctx = canvas.getContext('2d'),
	w =  canvas.width,
	h = canvas.height;

ctx.fillStyle = '#eee';

var total = 0;
ctx.font = '20px Arial';

var Apple = {
	pos: new Vector2(w/2, h/2),
	radius: 20,
	render: function(args) {
		ctx.strokeStyle = 'blue';

		ctx.strokeRect(this.pos.x - this.radius, this.pos.y - this.radius,
					   this.radius * 2, this.radius*2);

		ctx.beginPath();
		ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2*Math.PI);
		ctx.arc(this.pos.x, this.pos.y, this.radius / 2, 0, 2*Math.PI);
		ctx.stroke();
	}
}

var Ball = {
	pos: new Vector2(w/2 - w/4, h/2),
	speed: new Vector2(),
	velocity: new Vector2(0, 1),
	radius: 20,
	render: function() {
		ctx.strokeStyle = 'red';
		ctx.beginPath();
		ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2*Math.PI);
		ctx.stroke();
		this.pos.add(this.speed).limit(this.radius, w - this.radius, this.radius, h - this.radius);
		
		ctx.strokeRect(this.pos.x, this.pos.y, 1, 1);
		ctx.strokeRect(this.pos.x - this.radius, this.pos.y - this.radius,
					   this.radius * 2, this.radius*2);

		if (this.pos.y >= h - this.radius) {
			this.speed.y = 0;
		}
		if (this.speed.x !== 0) {
			this.speed.mult(0.9);
		}
		console.log(this.speed);
	}
}

function loop() {
	ctx.fillRect(0, 0, w, h);
	Ball.render();
	Apple.render();
	if (Ball.pos.intersect(Apple.pos, Ball.radius*2, Ball.radius*2, Apple.radius*2, Apple.radius*2, ctx)) {
		Apple.pos.set(new Vector2(Math.random() * w, Math.random() * h));
		// Ball.radius += 1;
		total += 1;
		// scoreTable.textContent = 'Score: ' + total;
	}
	ctx.strokeText(total, 3,20);
	window.requestAnimationFrame(loop);
}
loop();

document.addEventListener('keydown', function(e) {
	console.log(e.key);
	if (e.key === ' ') {
		Ball.speed.add(new Vector2(0, -10));
	}
	if (e.key === 'a') {
		Ball.speed.add(new Vector2(-10, 0));
	}
	if (e.key === 's') {
		Ball.speed.add(new Vector2(0, 10));
	}
	if (e.key === 'd') {
		Ball.speed.add(new Vector2(10, 0));
	}
	if (e.key === 'w') {
		Ball.speed.add(new Vector2(0, -10));
	}
	if (e.key === 'e') {
		Ball.speed.add(new Vector2(10, -10));
	}
	if (e.key === 'q') {
		Ball.speed.add(new Vector2(-10, -10));
	}
});

canvas.addEventListener('mousemove', function(e) {
	Ball.pos.set(new Vector2(e.layerX, e.layerY));
});