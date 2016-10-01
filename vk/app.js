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
	response.innerHTML += ("<li>" + item.body + "</li>");
}