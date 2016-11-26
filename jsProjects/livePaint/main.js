(function(){
		
	var config = {
		apiKey: "AIzaSyAwKMoKj_sk6TQV-paWdgarGW8w8v8XQ1Q",
		authDomain: "nulp-93482.firebaseapp.com",
		databaseURL: "https://nulp-93482.firebaseio.com",
		storageBucket: "nulp-93482.appspot.com",
		messagingSenderId: "163026386106"
	  };
	firebase.initializeApp(config);

	var title = document.getElementById('title');

	var db = firebase.database().ref().child('posts');
	db.on('value', function(posts) {
		// title.innerText = text.val();
		console.log(posts.val());
	});

	document.getElementById('submit').addEventListener('click', function(){

		var input = document.getElementById('textInput');

	});

}());