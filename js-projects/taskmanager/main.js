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
	var db = firebase.database().ref().child('posts/'+username);

	db.on('value', function(posts) {
		var response = posts.val();
		items.innerHTML = '';
		Object.keys(response).reverse().map(function(objectKey, index) {
	    	var value = response[objectKey];

			var mainElem = document.createElement('div');
			var removeButton = document.createElement('button');
			var elemText = document.createElement('span');
			//Main div
			mainElem.className = 'item';
			mainElem.id = value.key;
			//remove button
			removeButton.className = 'remove-button';
			removeButton.innerText = 'X';
			removeButton.onclick = function(){
				removePost(this.parentNode.id);
			};
			//content span
			elemText.className = 'content';
			elemText.innerText = value.text;

			mainElem.appendChild(elemText);
			mainElem.appendChild(removeButton);
			items.appendChild(mainElem);

		});
	});



	document.getElementById('submit').addEventListener('click', function(){

		var text = document.getElementById('textInput');
		if (text.value.length > 0) {
			writeNewPost(text.value);
			text.value = "";
		} else {
			alert("Заповніть форму!");
		}

	});

	document.getElementById('clear-button').addEventListener('click', function(){
		var conf = confirm("Очистити iсторiю?");
		if (conf) clearMessageList(10);
	});

	var menuOpened = false;
	document.getElementById('stick').addEventListener('click', function(elem){
		var menu = document.getElementById('bottom-menu');
		if (!menuOpened){
			menu.className = 'bottom-menu bottom-menu-opened';
			elem.target.style.transform = "rotate(180deg)";
		} else {
			menu.className = 'bottom-menu';
			elem.target.style.transform = "rotate(0deg)";
		}
		console.log(elem);
		menuOpened = !menuOpened;
	});


	function writeNewPost(title) {
		clearMessageList(40);
		var newPostKey = firebase.database().ref().child('posts/'+username).push().key;

		var postData = {
			text: title,
			key: newPostKey
		};
		var updates = {};
		updates['/posts/'+username+'/' + newPostKey] = postData;

		return firebase.database().ref().update(updates);
	}

	function removePost (postId) {
		firebase.database().ref().child("posts/"+username+"/"+postId).remove();
	}

	function clearMessageList(cnt){
		var itemss = document.getElementsByClassName('item');
		if (itemss.length > cnt)
			if (itemss.length > 10) {
				for (var i = itemss.length-1; i >= 10; i--) {
					removePost(itemss[i].id);
				}
			}
	}



}());
