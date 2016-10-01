var response = document.getElementById("response");

function req(){
	var responseField = $("#response");

	var req="https://api.vk.com/method/messages.getDialogs?";
	$.ajax({
	    url : req,
	    type : "GET",
	    data: {
	    	unread: "1",
	    	access_token: $("#enterid").val(),
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
	html += '<div class="demo-card-square mdl-card mdl-shadow--2dp"><div class="mdl-card__title mdl-card--expand"><h2 class="mdl-card__title-text">';
	html += 'Message';
	html += '</h2></div><div class="mdl-card__supporting-text">'
	html += item.body;
	html += '</div></div>';
	response.innerHTML += (html);
}