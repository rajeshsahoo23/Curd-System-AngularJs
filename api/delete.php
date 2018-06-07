<?php 
require_once('config.php');
$data = json_decode(file_get_contents("php://input"));
	 $sql = "DELETE FROM `employees` WHERE `id`= $data->id";
$result = $conn->query($sql);
$conn->close();
?>