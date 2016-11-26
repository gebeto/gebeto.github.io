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
	var cnt = "";

	db.on('value', function(posts) {
		cnt = posts.val().length.toString();
		var response = posts.val().reverse();
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
		db.set({
			cnt: input.value
		});

	});



}());