var Tween = TweenLite;

var cdev = document.querySelector('#CDev');
var client = document.querySelector('#Client');
var visionArrow = document.querySelector('#Vision-Arrow');
var projectVision = document.querySelector('#Project-Vision');

Tween.to(cdev, 4, {x: 65, ease: Expo.easeOut});
Tween.to(client, 4, {x: 292, ease: Expo.easeOut, onComplete: projectVisionAnimation});
Tween.to(visionArrow, 1, {opacity: 1}).delay(2);

function projectVisionAnimation() {
	Tween.fromTo(projectVision, 3, {
		x: 65,
		opacity: 0,
	}, {
		x: 183,
		opacity: 1,
		ease: Circ.easeOut,
	});
	
	Tween.to(projectVision, 3, {
		x: 292,
		opacity: 0,
		ease: Circ.easeIn,
		onComplete: projectVisionAnimation
	}).delay(3);
}