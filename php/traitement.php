<?php
if(isset($_POST['u']) && isset($_POST['m'])) {
	$username = $_POST['u'];
	$message = $_POST['m'];
	$date = date("y-m-d");
include_once("cnx.php");
$sql="INSERT INTO messages VALUES(NULL, '$username', '0', '$message', '$date')";
 $db->query($sql);
}





?>