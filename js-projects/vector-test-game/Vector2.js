
function Vector2(x, y) {
	this.x = (x ? x : 0);
	this.y = (y ? y : 0);
}

Vector2.prototype.add = function(vector) {
	this.x += vector.x;
	this.y += vector.y;
	return this;
}

Vector2.prototype.div = function(vector) {
	this.x -= vector.x;
	this.y -= vector.y;
	return this;
}

Vector2.prototype.mult = function(size) {
	this.x *= size;
	this.y *= size;
	return this;
}

Vector2.prototype.set = function(vector) {
	this.x = vector.x;
	this.y = vector.y;
	return this;
}

Vector2.prototype.reset = function() {
	this.x = 0;
	this.y = 0;
	return this;
}

Vector2.prototype.limit = function(xFrom, xTo, yFrom, yTo) {
	if (this.x > xTo) {
		this.x = xTo;
	} else if (this.x < xFrom) {
		this.x = xFrom;
	}

	if (this.y > yTo) {
		this.y = yTo;
	} else if (this.y < yFrom) {
		this.y = yFrom;
	}
	return this;
}

Vector2.prototype.intersect = function(vector, widthA, heightA, widthB, heightB, ctx) {
	ctx.strokeStyle = 'lime';
	ctx.strokeRect(this.x - widthA / 2, this.y - heightA / 2, 40, 40);
	ctx.strokeRect(vector.x - widthB / 2, vector.y - heightB / 2, 40, 40);
	if ((this.x - widthA / 2 >= vector.x - widthB / 2) && (this.x - widthA / 2 <= vector.x + widthB / 2) &&
		(this.y - heightA / 2 >= vector.y - heightB / 2) && (this.y - heightA / 2 <= vector.y + heightB / 2)) {
		console.log("11111111111111111111");
		return true;
	} else if ((this.x + widthA / 2 >= vector.x - widthB / 2) && (this.x + widthA / 2 <= vector.x + widthB / 2) &&
		(this.y - heightA / 2 >= vector.y - heightB / 2) && (this.y - heightA / 2 <= vector.y + heightB / 2)) {
		console.log("22222222222222222222");
			return true;
	} else if ((this.x + widthA / 2 >= vector.x - widthB / 2) && (this.x + widthA / 2 <= vector.x + widthB / 2) &&
		(this.y + heightA / 2 >= vector.y - heightB / 2) && (this.y + heightA / 2 <= vector.y + heightB / 2)) {
		console.log("33333333333333333333");
			return true;
	} else if ((this.x - widthA / 2 >= vector.x - widthB / 2) && (this.x - widthA / 2 <= vector.x + widthB / 2) &&
		(this.y + heightA / 2 >= vector.y - heightB / 2) && (this.y + heightA / 2 <= vector.y + heightB / 2)) {
		console.log("44444444444444444444");
			return true;
	}
}