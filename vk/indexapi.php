<!DOCTYPE html>
<head>
	<meta charset="utf-8">
	<title>Api request</title>
	<meta name="viewport" content="width=device-width">
	<meta name="viewport" content="initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">
	<link rel="icon" href="http://vladmaxi.net/favicon.ico" type="image/x-icon">
	<link rel="shortcut icon" href="http://vladmaxi.net/favicon.ico" type="image/x-icon">
	<script src="jquery.js"></script>
	<link rel="stylesheet" type="text/css" href="style.css" />
</head>
<body>
	<a href="index.html">back</a>
	<div id="slick-login" autocomplete="off">
		<a href="" style="color:red" name="docs" target="_blank"></a>
		<textarea name="response" style="height: 100px; padding: 4px;">Response</textarea>
		<input type="text" name="method" placeholder="Method name">
		<button class="submit" name="newMethod">Add new parameter</button>
		<button class="submit" name="apiRequest">Send request</button>
	</div>
	<script>
	$(document).ready(function(){
		$("button[name='newMethod']").bind("click", function(){
			$("#slick-login").append($("<input type='text' class='parameter'>"));
		});

		$("button[name='apiRequest']").bind("click", function(){
			var parameters = "?";
			$.each($(".parameter"), function(key, data){
				// console.log($(data).val());
				parameters += $(data).val()+"&";
			});
			parameters += "v=5.53";
			parameters = $("input[name='method']").val() + parameters;
			console.log(parameters);
			$.get("api.php", {parameters: parameters}, function(data){
				$("textarea[name='response']").text(data);
			});
			// $("textarea[name='response']").text(parameters);
		});

		$("input[name='method']").bind("keyup", function(){
			$("a[name='docs']").text("Посмотреть документацию по: "+$("input[name='method']").val().toUpperCase());
			$("a[name='docs']").attr("href","https://vk.com/dev/"+$("input[name='method']").val())
		});


	});
	</script>
</body>
</html>