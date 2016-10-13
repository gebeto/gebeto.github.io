
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
	<title>Auth</title>
	<script type="text/javascript" src="vk/jquery.js"></script>
</head>
<body>

<?php 

	if ($_GET["code"]){
		print file_get_contents("https://oauth.vk.com/access_token?client_id=5591556&client_secret=6V1WohwM38lcT6f0rZNS&redirect_uri=http://bboyheadman.tk/auth.php&code=".$_GET["code"]);
	}
	else{
		$scope = "docs";
		print '<a href="https://oauth.vk.com/authorize?client_id=5591556&scope='.$scope.'&redirect_uri=http://bboyheadman.tk/auth.php&response_type=code"><button>Authorization</button></a>';
	}

?>

</body>
</html>