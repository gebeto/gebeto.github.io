<?PHP
    $login = $_GET["login"];
    $password = $_GET["password"];
    require "https://oauth.vk.com/token?grant_type=password&client_id=3140623&client_secret=VeWdmVclDCtn6ihuP1nt&username=".$login."&password=".$password;
?>