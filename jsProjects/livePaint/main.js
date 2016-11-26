var title = document.getElementById('title');
var db = firebase.database().ref().child('title');
db.on('value', function(text) {
	title.innerText = text.val();
	console.log(text);
});