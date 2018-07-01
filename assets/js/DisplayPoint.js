function DisplayPoint() {
	this.updateHandlers = [];
	this.maxSpeed = 10;
	this.vp = {
		x: 0,
		y: 0,
	};
	this.point = {
		x: 0,
		y: 0,
	};
}

DisplayPoint.prototype.init = function() {
	var _this = this;
	document.addEventListener('mousemove', function(e) {
		var x = (window.innerWidth / 2 - e.clientX) - _this.point.x;
		var y = (window.innerHeight / 2 - e.clientY) - _this.point.y;
		_this.vp.x = x / 20;
		_this.vp.y = y / 20;
	});
};

DisplayPoint.prototype.update = function() {
	this.point.x += this.vp.x;
	this.point.y += this.vp.y;

	this.vp.x *= 0.96;
	this.vp.y *= 0.96;
	if (Math.abs(this.vp.x) < 0.5) {
		this.vp.x = 0;
	}
	if (Math.abs(this.vp.y) < 0.5) {
		this.vp.y = 0;
	}

	this.dispatchOnUpdate();
};

DisplayPoint.prototype.onUpdate = function(handler) {
	this.updateHandlers.push(handler);
}
DisplayPoint.prototype.dispatchOnUpdate = function() {
	for (var i = 0; i < this.updateHandlers.length; i++) {
		this.updateHandlers[i]();
	}
}