var response = document.getElementById("messages");

function req(){
	var responseField = $("#messages");

	var req="https://api.vk.com/method/messages.getDialogs?";
	$.ajax({
	    url : req,
	    type : "GET",
	    data: {
	    	unread: "1",
	    	access_token: $("#enter-token").val(),
	    	v: "5.52"
	    },
	    dataType : "jsonp",
	    success : function(msg){
	    	console.log(msg.response);
	    	for (var i = 0; i < msg.response.count; i++){
	    		createMessage(msg.response.items[i].message);
	    	}
    	}
	});

}

function createMessage(item){
	var html = "";
	html += '<article class="item"><a><header><h3>';
	html += item.body;
	html += '</h3></header></a></article>';
	response.innerHTML += (html);
}

// ok