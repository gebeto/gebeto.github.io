window.addEventListener("load", function(){

	// $.ajax({
	// 	url: 'https://api.parse.com/1/classes/Post',
	// 	type: 'POST',
	// 	dataType: 'jsonp',
	// 	crossDomain: true,
	// 	headers: header,
	// 	data: {"_method": "GET"},
	// 	success: function(response){
	// 		console.log(response);
	// 	},
	// 	error: function(error){
	// 		console.log(error);
	// 	}
	// });
	
	addPosts(response);

});

function addPosts(posts) {
	var postsDiv = document.getElementById("posts");
	
	for (var i = 0; i < posts["results"].length; i++) {
		postsDiv.innerHTML += createPostHtml(posts["results"][i]);
	}
}

function createPostHtml(post) {
	var html = "";
	// console.log(post);
	html += '<div class="post">';
	html += '<h2 class="post-title">';
	html += (post["title"] || "*");
	html += '</h2><div class="post-info">';
	html += '<span class="post-date">';
	html += post["createdAt"];
	html += '</span>';
	html += ' by <span class="post-author">#';
	html += post["ownerUsername"];
	html += '</span></div><p class="post-content">';
	html += post["text"];
	html += '</p></div>';
	return html;
}

var header = {
	"X-Parse-Client-Version": "i1.14.2",
	"X-Parse-Session-Token": "r:CBCznJmC9aS8cg39lz81QZftp",
	"X-Parse-Application-Id": "epzXvlPO7EqZ56S0gtAHX01MPujuSplapqKVEy7W",
	"X-Parse-Client-Key": "RHuedhe5S3KQReycWK8jtiX2PvBMBaZH2n9guyN5",
	"X-Parse-Installation-Id": "b035b9dc-bb26-40a2-a37e-8b6bffadc86b",
	"X-Parse-OS-Version": "9.3.3 (13G34)",
	"X-Parse-App-Build-Version": "1",
	"X-Parse-App-Display-Version": "2.0.2"
};


var response = {
	"results": [{
		"createdAt": "2016-09-29T15:15:40.643Z",
		"is_private": false,
		"objectId": "BAA9mY5xW4",
		"ownerID": "hf8LBnz8Pq",
		"ownerUsername": "pseudo",
		"publishedAt": {
			"__type": "Date",
			"iso": "2016-09-29T15:15:51.490Z"
		},
		"text": "Write your truest sentences right here",
		"title": "Title",
		"updatedAt": "2016-09-29T15:15:40.643Z"
	}, {
		"createdAt": "2016-09-29T15:02:24.889Z",
		"is_private": false,
		"objectId": "lLv7Mnflzv",
		"ownerID": "NUXp1x5yfD",
		"ownerUsername": "bboyheadman",
		"publishedAt": {
			"__type": "Date",
			"iso": "2016-09-29T15:02:24.181Z"
		},
		"text": "Тяп ляп і пісос.",
		"title": "Ляп",
		"updatedAt": "2016-09-29T15:02:24.889Z"
	}, {
		"createdAt": "2016-09-29T14:21:12.666Z",
		"is_private": false,
		"objectId": "F6yjR6Lk8v",
		"ownerID": "DO9UXETgbt",
		"ownerUsername": "sumburno",
		"publishedAt": {
			"__type": "Date",
			"iso": "2016-09-29T14:21:12.685Z"
		},
		"text": "І щоранку вона сподівається, \nщо все буде інакше. \nЩо побачить інше.\nЩо усе здалося. \nМабуть тоді настає дорослішання, \nколи не віриш у дурниці. \nІ смішивість маєш прийняти, як збулося. ",
		"updatedAt": "2016-09-29T14:22:59.220Z"
	}, {
		"createdAt": "2016-09-29T13:45:32.745Z",
		"is_private": false,
		"objectId": "ZnBjoV44Wu",
		"ownerID": "G1UO85Kd2m",
		"ownerUsername": "VelenaSilova",
		"publishedAt": {
			"__type": "Date",
			"iso": "2016-09-29T13:45:32.743Z"
		},
		"text": "-Ты хоть высыпаешся? \n-Куда?",
		"title": "#прост.случай",
		"updatedAt": "2016-09-29T13:45:32.745Z"
	}, {
		"createdAt": "2016-09-29T13:12:46.498Z",
		"is_private": false,
		"objectId": "zMdawt1yQk",
		"ownerID": "Q1WCl0VRKW",
		"ownerUsername": "drama",
		"publishedAt": {
			"__type": "Date",
			"iso": "2016-09-29T13:12:45.839Z"
		},
		"text": "Цифра 3 схожа на жопу або цицьки і в серйозному документі виглядає надто вульгарно\n",
		"title": "#дизайнер",
		"updatedAt": "2016-09-29T13:12:46.498Z"
	}, {
		"createdAt": "2016-09-29T08:15:46.625Z",
		"is_private": false,
		"objectId": "JUDuKJYCju",
		"ownerID": "oGfR0wzlTl",
		"ownerUsername": "Yuliia",
		"publishedAt": {
			"__type": "Date",
			"iso": "2016-09-29T12:28:33.453Z"
		},
		"text": "Test",
		"updatedAt": "2016-09-29T12:28:34.346Z"
	}, {
		"createdAt": "2016-09-29T11:05:41.967Z",
		"is_private": false,
		"objectId": "A5KI6ljy3j",
		"ownerID": "X5NDpAzWGj",
		"ownerUsername": "Maijune",
		"publishedAt": {
			"__type": "Date",
			"iso": "2016-09-29T11:07:26.668Z"
		},
		"text": "Мені кажуть: сідай. У кімнаті-радіорубці ледве вміщаються присутні: я і четверо не знайомих мені осіб. Посередині приміщення пролягає межа розподілу: ось стіл з мікрофоном, ось чотири стільці з людьми. Дивляться на мене, чи то судді, чи то прості смертні. Мені вказують на місце за столом: сідай, демонструй. Я прийшла сюди транслювати свої смаки. Проте, коли мені вказують на моє місце, я втрачаю будь-яку віру у те, що цих людей може зацікавити мій похмурий Нік Кейв і мій так само похмурий голос. Мені є що сказати, але часу і потрібних їм інтонацій - катма.  Я підводжуся зі стільця, він чекає на наступну жертву примарних амбіцій.",
		"title": "and the mercy seat is waiting",
		"updatedAt": "2016-09-29T11:11:13.828Z"
	}, {
		"createdAt": "2016-09-29T08:29:19.615Z",
		"is_private": false,
		"objectId": "L6MYwn1Uii",
		"ownerID": "sNlwbz0qyr",
		"ownerUsername": "evazesco",
		"publishedAt": {
			"__type": "Date",
			"iso": "2016-09-29T08:29:19.606Z"
		},
		"text": "ползи мой огонёк \nвверх по занавеске\nдуши меня\nмой угарный газ\nкаждый кусочек\nразорванной принцессы\nя поцелую \nв последний раз",
		"title": "#цитаткиизпесен",
		"updatedAt": "2016-09-29T08:29:19.615Z"
	}, {
		"createdAt": "2016-09-28T22:32:18.535Z",
		"is_private": false,
		"objectId": "g59BkiExdm",
		"ownerID": "9FS8v5HqGT",
		"ownerUsername": "vincenso",
		"publishedAt": {
			"__type": "Date",
			"iso": "2016-09-28T22:32:17.766Z"
		},
		"text": "Він не знав як себе проявляти, тому прикидався клоуном. А згодом ним і став..",
		"title": "метаморфози",
		"updatedAt": "2016-09-28T22:32:18.535Z"
	}, {
		"createdAt": "2016-09-28T13:20:28.595Z",
		"is_private": false,
		"objectId": "BewTQamTEe",
		"ownerID": "Q1WCl0VRKW",
		"ownerUsername": "drama",
		"publishedAt": {
			"__type": "Date",
			"iso": "2016-09-28T13:20:28.483Z"
		},
		"text": "Бабовною сипляться зими\nА кров'ю стелиться осінь\nМені здається красивим\nТвоє змарніле волосся",
		"title": "#drama #varlamovakris",
		"updatedAt": "2016-09-28T13:20:28.595Z"
	}, {
		"createdAt": "2016-09-28T11:11:22.357Z",
		"is_private": false,
		"objectId": "LDEpGQHI9n",
		"ownerID": "TSymwqFNGh",
		"ownerUsername": "ladybagetiq",
		"publishedAt": {
			"__type": "Date",
			"iso": "2016-09-28T11:11:19.199Z"
		},
		"text": "Кажуть краще сповідувати філософію, яка бореться з пожадливістю, ніж відстоювати закони про охорону власності...\n- Руки геть від мого печиваааааааа!!!!",
		"updatedAt": "2016-09-28T11:11:22.357Z"
	}, {
		"createdAt": "2016-09-28T05:34:13.693Z",
		"is_private": false,
		"objectId": "O5HOLeVc07",
		"ownerID": "sNlwbz0qyr",
		"ownerUsername": "evazesco",
		"publishedAt": {
			"__type": "Date",
			"iso": "2016-09-28T05:34:13.691Z"
		},
		"text": "- какие планы на выходные?\n- точно не знаю, а есть предложения?\n- выходи за меня",
		"title": "#вспомниласлучайодин",
		"updatedAt": "2016-09-28T08:33:47.116Z"
	}, {
		"createdAt": "2016-09-27T20:15:03.876Z",
		"is_private": false,
		"objectId": "aVPnoRkhK4",
		"ownerID": "VQAsX8u2WU",
		"ownerUsername": "РомкоШукель",
		"publishedAt": {
			"__type": "Date",
			"iso": "2016-09-27T20:15:03.731Z"
		},
		"text": "девіацять девіать",
		"title": "обставина часу і місця",
		"updatedAt": "2016-09-27T20:15:03.876Z"
	}, {
		"createdAt": "2016-09-27T15:16:29.044Z",
		"is_private": false,
		"objectId": "EDKoFmE7BE",
		"ownerID": "mKXMS1Ryth",
		"ownerUsername": "Xe",
		"publishedAt": {
			"__type": "Date",
			"iso": "2016-09-27T15:16:28.225Z"
		},
		"text": "Меняй жизнь! Если остановишься- катишься вниз. Пробуй, стучи, добивайся, давай, блядь! \n#xeniababchuk",
		"title": "хватит ныть!",
		"updatedAt": "2016-09-27T15:17:08.434Z"
	}, {
		"createdAt": "2016-09-27T14:58:20.458Z",
		"is_private": false,
		"objectId": "8P00qqCcj3",
		"ownerID": "mKXMS1Ryth",
		"ownerUsername": "Xe",
		"publishedAt": {
			"__type": "Date",
			"iso": "2016-09-27T14:58:19.638Z"
		},
		"text": "Так выздоровлю бысто- быстро #xeniababchuk",
		"title": "хочу валяться  и обниматься",
		"updatedAt": "2016-09-29T15:19:49.789Z"
	}, {
		"createdAt": "2016-09-27T11:38:03.630Z",
		"is_private": false,
		"objectId": "peRPuaP2Mc",
		"ownerID": "sNlwbz0qyr",
		"ownerUsername": "evazesco",
		"publishedAt": {
			"__type": "Date",
			"iso": "2016-09-27T11:38:03.642Z"
		},
		"text": "50 оттенков \"никак\"\nэто даже не весело уже",
		"updatedAt": "2016-09-27T11:38:03.630Z"
	}, {
		"createdAt": "2016-09-27T10:16:54.609Z",
		"is_private": false,
		"objectId": "KkFZuQDqsG",
		"ownerID": "TSymwqFNGh",
		"ownerUsername": "ladybagetiq",
		"publishedAt": {
			"__type": "Date",
			"iso": "2016-09-27T10:16:47.744Z"
		},
		"text": "Дайте всім людям ексетезі. Нам так не вистачає окситоцинових припадків.",
		"updatedAt": "2016-09-27T10:16:54.609Z"
	}, {
		"createdAt": "2016-09-27T08:18:26.411Z",
		"is_private": false,
		"objectId": "ESh04h0nvw",
		"ownerID": "sNlwbz0qyr",
		"ownerUsername": "evazesco",
		"publishedAt": {
			"__type": "Date",
			"iso": "2016-09-27T08:18:26.407Z"
		},
		"text": "помнится, как-то летом мой друг написал, что завтра что-то произойдёт, после чего он будет либо очень счастлив  либо очень расстроен\nчто это было, он так и не рассказал, да уже и не важно\nно помню, что вечером того же дня я увидела падающую звезду и недолго думая загадала чтобы у него все было хорошо \nпотом все было так, как он хотел, но мораль тут в другом\nтогда я поняла, кто для меня важен ",
		"title": "#вспомниласлучайодин",
		"updatedAt": "2016-09-28T05:35:09.007Z"
	}, {
		"createdAt": "2016-09-27T07:52:14.548Z",
		"is_private": false,
		"objectId": "M0O3pUdoFb",
		"ownerID": "TSymwqFNGh",
		"ownerUsername": "ladybagetiq",
		"publishedAt": {
			"__type": "Date",
			"iso": "2016-09-27T07:52:12.932Z"
		},
		"text": "Фантастичний ефект дає подвійне капучино для людини, яка намагається позбавитись залежності від кави: я майже не відчуваю своє тіло. Чую тільки руки, бо тримаю смартфон, і вуха, бо втикнула туди навушники. Мені страшенно добре... ",
		"title": "Теїзм",
		"updatedAt": "2016-09-27T07:53:22.835Z"
	}, {
		"createdAt": "2016-09-26T23:39:08.305Z",
		"is_private": false,
		"objectId": "tcctQHbiFI",
		"ownerID": "sNlwbz0qyr",
		"ownerUsername": "evazesco",
		"publishedAt": {
			"__type": "Date",
			"iso": "2016-09-26T23:39:08.320Z"
		},
		"text": "наверно, я стала слишком сентиментальной, но в последнее время понимаю, что люблю на несколько человек больше, чем мама и папа\nтут речь не о той любви между парнем и девушкой, а о любви к человеку, как бесполому существу\nможет ли быть такое, что таких людей несколько? это правильно вообще?",
		"updatedAt": "2016-09-26T23:39:08.305Z"
	}]
};