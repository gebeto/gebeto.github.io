var title = document.getElementById('title');
var db = firebase.database().ref().child('text');
db.on('value', function(text) {
	title.innerText = text.val();
});