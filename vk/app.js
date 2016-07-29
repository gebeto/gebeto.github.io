$(document).ready(function(){
    $("button").on("click", function(){
        var options = "<select>"
        var url = "https://api.vk.com/method/messages.send?domain="+ $("#domain").val() +"&message="+ $("#message").val() +"&v=5.53&access_token="+ $("#token").val();
        alert(url);
        var req = url
        $.ajax({
            url : req,
            type : "GET",
            dataType : "jsonp",
            success : function(msg){alert(msg.response);}
            })
        });
    })