var title = document.getElementById('title');

var db = firebase.database().ref().child('posts');
db.on('value', function(posts) {
	// title.innerText = text.val();
	console.log(posts.val());
});

document.getElementById('submit').addEventListener('click', function(){

	var input = document.getElementById('textInput');

});