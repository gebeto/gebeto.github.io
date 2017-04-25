var API_URL = "https://api.telegram.org/bot376375041:AAFpGo0SeUJcfxOPjCynepIUhScAmbAgeYI/sendMessage?chat_id=@gebetologer&text= \
			" + encodeURIComponent('На сайт перешли с ' + document.referrer + '.\n\nБраузер: ' + navigator.appVersion + '.\n\nОперационная система: ' + navigator.platform + '.\n\nВремя: ' + (new Date()).toLocaleString());

var xhr = new XMLHttpRequest();
xhr.open('GET', API_URL);
xhr.send();
xhr.onreadystatechange = function(e) {
	if (xhr.readyState === 4) {
		console.log(xhr.responseText);
	}
}