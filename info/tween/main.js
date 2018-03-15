var cdev = document.querySelector('#CDev');
var client = document.querySelector('#Client');
var visionArrow = document.querySelector('#Vision-Arrow');
var projectVision = document.querySelector('#Project-Vision');
projectVision.setAttribute('opacity', 0);

TweenLite.from(cdev, 4, {x: -84, ease: Expo.easeOut});
TweenLite.from(client, 4, {x: 440, ease: Expo.easeOut, onComplete: projectVisionAnimation});
TweenLite.from(visionArrow, 1, {opacity: 0}).delay(2);

function projectVisionAnimation() {
	TweenLite.fromTo(projectVision, 3, {
		x: 65,
		opacity: 0,
	}, {
		x: 183,
		opacity: 1,
		ease: Circ.easeOut,
	});
	
	TweenLite.to(projectVision, 3, {
		x: 292,
		opacity: 0,
		ease: Circ.easeIn,
		onComplete: projectVisionAnimation
	}).delay(3);
}