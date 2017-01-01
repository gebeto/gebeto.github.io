var startStreamButton = document.getElementById("start-stream-button");
var stopStreamButton = document.getElementById("stop-stream-button");
var mainWrapper = document.getElementById('main-wrapper');
var profilesBlock = document.getElementById('users');
var commentsBlock = document.getElementById('comments');
var streamScanInterval;
var ownerID;

var groupID = ""

// var token = "";
var stopStreamUrl = "https://api.vk.com/method/video.stopStreaming?access_token="+token+"&v=5.60";
var streamName = document.getElementById("stream-name");
var startUrl = "https://api.vk.com/method/video.startStreaming?access_token="+token+"&https=1&lang=en&name="+streamName.value+"&v=5.60&wallpost=1";

function refreshProfiles(profiles) {
	profilesBlock.innerHTML = "";
	for (var i = 0; i < profiles.length; i++) {
		var html = '<div class="user">';
		html += '<img src="'+profiles[i]['photo_50']+'">';
		html += '<a class="name" target="_blank" href="https://vk.com/id'+profiles[i]["id"]+'">' + profiles[i]["first_name"] + ' ' + profiles[i]["last_name"] + '</a>';
		html += '</div>';
		profilesBlock.innerHTML += html;
	}
}

function refreshComments(comments) {
	commentsBlock.innerHTML = "";
	for (var i = 1; i < comments.length; i++) {
		var html = '<div class="comment">';
		html += '';
		html += '<p>' + comments[i]["message"] + '</p>';
		html += '</div>';
		commentsBlock.innerHTML += html;
	}
}

function startScanStream(videoID) {
	var chatUrl = "https://bboyheadman.github.io/stream/streamPanel/chat.html?token="+token+"&video_id="+videoID+"&group_id="+groupID;
	var chatLink = document.getElementById('chat-url');
	chatLink.href = chatUrl;
	chatLink.style.display = "block";
	streamScanInterval = setInterval(function(){
		$.ajax({
			url: "https://api.vk.com/method/video.liveHeartbeat?access_token="+token+"&extended=1&fields=photo_50&https=1&lang=en&owner_id="+ownerID+"&spectators_count=10&v=5.60&video_id="+videoID,
			dataType: "jsonp",
			jsonpCallback: "logResults",
			success: function(res){
				console.log(res);
				refreshProfiles(res["response"]["profiles"])
			},
			error: function(err) {
				console.log(err);
				refreshProfiles([{first_name: 'error'}])
			}
		});
		$.ajax({
			url: "https://api.vk.com/method/video.getComments?count=30&sort=desc&access_token="+token+"&group_id="+groupID+"&video_id="+videoID,
			dataType: "jsonp",
			jsonpCallback: "logResults",
			success: function(res){
				console.log(res);
				refreshComments(res["response"]);
			},
			error: function(err) {
				console.log(err);
				refreshComments([{message: 'error'}]);
			}
		});
	}, 5000);
}

function startStream(){
	streamName = document.getElementById("stream-name");
	groupID = document.getElementById('stream-by-group').value;
	if (groupID.length === 0) {
		startUrl = "https://api.vk.com/method/video.startStreaming?access_token="+token+"&https=1&lang=en&name="+streamName.value+"&v=5.60&wallpost=0";
	} else {
		startUrl = "https://api.vk.com/method/video.startStreaming?access_token="+token+"&group_id="+groupID+"&https=1&lang=en&name="+streamName.value+"&v=5.60&wallpost=0";
	}
	$.ajax({
		url: startUrl,
		dataType: "jsonp",
		jsonpCallback: "logResults",
		success: function(res){
			console.log(res);
			startScanStream(res["response"]["video_id"]);
			ownerID = res["response"]["owner_id"];
			// startStreamButton.value = "Started";
			// stopStreamButton.value = "Stop Stream";
			document.getElementById('server-url').value = res['response']['stream']['url']
			document.getElementById('server-key').value = res['response']['stream']['key']
			document.getElementById('server-name').innerHTML = "Stream name: " + res['response']['name']
			mainWrapper.style.height = "376px";
		},
		error: function(err) {
			console.log(err);
		}
	});
}

function stopStream() {
	stopStreamUrl = "https://api.vk.com/method/video.stopStreaming?access_token="+token+"&v=5.60";
	$.ajax({
		url: stopStreamUrl,
		dataType: "jsonp",
		jsonpCallback: "logResults",
		success: function(res){
			console.log(res);
			clearInterval(streamScanInterval);
			// stopStreamButton.value = "Stopped";
			// startStreamButton.value = "Start Stream";
			mainWrapper.style.height = "276px";
		},
		error: function(err) {
			console.log(err);
		}
	});
}

$(document).ready(function(){
	startStreamButton = document.getElementById("start-stream-button");
	stopStreamButton = document.getElementById("stop-stream-button");
	profilesBlock = document.getElementById('users');
	commentsBlock = document.getElementById('comments');
	startStreamButton.addEventListener('click', startStream);
	stopStreamButton.addEventListener('click', stopStream);
});

var hidden = true;
document.getElementById('hide-show').addEventListener('click', function(){
	if (hidden) {
		mainWrapper.style.height = "376px";
	} else {
		mainWrapper.style.height = "276px";
	}
	hidden = !hidden;
});