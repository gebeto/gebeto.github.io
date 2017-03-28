<!DOCTYPE html>
<html>
<head>
	<title>VSCO</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="assets/css/main.css">
</head>
<body>
<?php
	$url = "https://camstore.vsco.co/2.1/camstore/ios?app_id=77357429-48A7-4E5A-A2AF-5D8C6175EFFC&app_version=v4.5.6%20%282040%29&device_model=iPhone%205s&email=bboyheadman%40gmail.com&os_version=9.2";
	$resp = file_get_contents($url);
	$arr = split('"key":"', $resp);
	$result = array();
	foreach ($arr as $key => $value) {
	 	try{
	 		if (strlen(split('","c', $value)[0])<4){
	 			// print split('","c', $value)[0];
	 			array_push($result, split('","c', $value)[0]);
	 		}
	 	} 
	 	catch(Exception $e){

	 	}
	 } 
	 array_push($result, "wwf");
	 array_push($result, "se1");
	 array_push($result, "se2");
	 array_push($result, "se3");
	 array_push($result, "tk");
	 $keys = json_encode($result);
	 $count = count($result);
	print '<textarea rows="10" cols="100">"keys": '.$keys.'</textarea>';
	print '<h1>'.$count.' Фильтров.</h1>';
?>
</body>a
</html>