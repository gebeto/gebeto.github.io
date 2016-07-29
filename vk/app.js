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


    })