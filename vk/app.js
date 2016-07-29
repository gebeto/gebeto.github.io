$(document).ready(function(){
    $(".send-message > button").on("click", function(){
        var options = "<select>"
        var url = "https://api.vk.com/method/messages.send?domain="+ $(".send-message > #domain").val() +"&message="+ $(".send-message > #message").val() +"&v=5.53&access_token="+ $(".send-message > #token").val();
        // alert(url);
        var req = url
        $.ajax({
            url : req,
            type : "GET",
            dataType : "jsonp",
            success : function(msg){
            	alert(msg.response);
            }
            })
        });

    $(".checker > button").on("click", function(){
        var options = "<select>"
        var url = "https://api.vk.com/method/users.get?&namecase=Nom&fields=photo_50,city,verified&v=5.53&access_token="+ $(".checker > #token").val();
        // alert(url);
        var req = url
        $.ajax({
            url : req,
            type : "GET",
            dataType : "jsonp",
            success : function(msg){
            	$(".profile").remove();
            	if (msg.error)
            		alert(msg.error["error_msg"]);
            	var first_name = msg.response[0]["first_name"];
            	var last_name = msg.response[0]["last_name"];
            	var image = msg.response[0]["photo_50"];
            	var id = msg.response[0]["id"];
            	$(".checker").append($("<div class='profile'></div>"));
            	$(".profile").append($("<h1>" + first_name + " " + last_name + "</h1>"));
            	$(".profile").append($("<h1>ID: " + id + "</h1>"));
            	$(".profile").append($("<img src='" + image + "'/>"));
            },
            error : function(msg){
            	alert("error");
            }
            })
        });

    	$(".login > button").on("click", function(){
	        var BASE = "https://api.vk.com/oauth/token?";
			var password = $(".login > #password").val();
			var email = $(".login > #login").val();
			var scope = "status,friends,photos,audio,video,docs,notes,pages,wall,groups,notifications,messages";
			var payload = "password="+password+"&scope="+scope+"&grant_type=password&username="+email+"&v=5.53&2fa_supported=1&client_secret=VeWdmVclDCtn6ihuP1nt&client_id=3140623";
			var url = BASE+payload;
			var req = url;
			$(".login").append(req)
	        $.ajax({
	            url : req,
	            type : "GET",
	            dataType : "jsonp",
	            success : function(msg){
	            	alert("SUC!");
	            },
	            error : function(msg){
	            	alert(msg.status);
	            }
	            })
        });


    })