datas = {
	"John":{
		"name": "&nbspSofia&nbsp &nbspTurkonbsp",
		"description": "&nbsp&nbsp&nbsp&nbspStudent | Designer | Programmer &nbsp&nbsp&nbsp&nbsp;",
		"avatar": "<img src='images/avatarJ.jpg' alt='' />",
		"color": "pink"
	},
	"Slavko":{
		"name": "Slavik Nychkalo",
		"description": "Student | Python Developer | Hacker:D",
		"avatar": "<img src='images/avatarS.jpg' alt='' />",
		"color": "#090909"
	}
}
var is = true;

function change(field, field2, avatar, user){
	if (is){
		changeGO(field, field2, avatar, "John");
		is = !is;
	}
	else{
		changeGO(field, field2, avatar, "Slavko");
		is = !is;
	}
}

function avatar_changer(avatar, user) {
	avatar.style.transitionDuration = "1s";
	avatar.style.opacity = "0";
	setTimeout(function(){
		avatar.innerHTML = datas[user]["avatar"]
		setTimeout(function(){
			avatar.style.opacity = "1";
		},100)
	}, 1000)
}

function changeGO(field, field2, avatar, user) {
	avatar_changer(avatar, user);
		setTimeout(function(){
			field.style.transitionDuration = "1s";
			field.style.color = "#ffffff";
			setTimeout(function(){
				field.innerHTML = datas[user]["name"];
				setTimeout(function(){
					field.style.color = "black";
					document.body.style.backgroundColor = datas[user]["color"];
				}, 100);
			}, 1000);
		}, 0);
		setTimeout(function(){
			field2.style.transitionDuration = "1s";
			field2.style.color = "#ffffff";
			setTimeout(function(){
				field2.innerHTML = datas[user]["description"];
				setTimeout(function(){
					field2.style.color = "black";
				}, 100);
			}, 1000);
		}, 300);
	}

