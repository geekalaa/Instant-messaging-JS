<?php
if(isset($_POST['ln']) && isset($_POST['idl'])) {
	include_once("cnx.php");
	$nbre_likes =intval($_POST['ln'])+1;
	$id_like =intval($_POST['idl']);
	
	$sql='UPDATE messages SET jaimes=\'' . $nbre_likes . '\' WHERE id=\'' . $id_like . '\'';
	$db->query($sql);
	
	
}