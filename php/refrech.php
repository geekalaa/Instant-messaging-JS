<?php
include_once("cnx.php");
$sql="SELECT * FROM messages ORDER BY id DESC LIMIT 10";	
$requete2 = $db->query($sql);	
$Retour = array();
while($resu = $requete2->fetch())	{		
			array_push($Retour, $resu);
}
echo json_encode($Retour,true);

?>