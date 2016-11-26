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
	var cnt = 0;

	db.on('value', function(posts) {
		var response = posts.val().reverse();
		cnt = response.length;
		for (var i = 0; i < response.length; i++) {
			var element = document.createElement('div');
			element.className = 'item';
			element.innerText = response[i];
			items.appendChild(element);
		}
		console.log(posts.val());
	});



	document.getElementById('submit').addEventListener('click', function(){

		console.log(cnt);
		var input = document.getElementById('textInput');
		var data = {cnt:input.value}
		db.set(data);

	});


	function writeNewPost(uid, username, picture, title, body) {
  // A post entry.
  var postData = {
    title: "someTitle",
    text: "Some text"
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('posts').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}



}());