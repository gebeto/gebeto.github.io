(function(){

	var config = {
		apiKey: "AIzaSyAwKMoKj_sk6TQV-paWdgarGW8w8v8XQ1Q",
		authDomain: "nulp-93482.firebaseapp.com",
		databaseURL: "https://nulp-93482.firebaseio.com",
		storageBucket: "nulp-93482.appspot.com",
		messagingSenderId: "163026386106"
		};
	firebase.initializeApp(config);

	var items = document.getElementById('items');
	var db = firebase.database().ref().child('posts');

	db.on('value', function(posts) {
		var response = posts.val();
		items.innerHTML = '';
		Object.keys(response).map(function(objectKey, index) {
	    	var value = response[objectKey];
			var element = document.createElement('div');
			element.className = 'item';
			element.id = value.key;
			element.innerText = value.text;
			items.appendChild(element);
		});
	});



	document.getElementById('submit').addEventListener('click', function(){

		var text = document.getElementById('textInput');
		if (text.value.length > 0) {
			writeNewPost(text.value);
		} else {
			alert("Заповніть форму!");
		}

	});


function writeNewPost(title) {
	// Get a key for a new Post.
	var newPostKey = firebase.database().ref().child('posts').push().key;

	var postData = {
		text: title,
		key: newPostKey
	};
	// Write the new post's data simultaneously in the posts list and the user's post list.
	var updates = {};
	updates['/posts/' + newPostKey] = postData;

	return firebase.database().ref().update(updates);
}



}());