<?php 
$data = json_decode(file_get_contents("php://input"));
require_once('config.php');
$newDate =date('Y-m-d H:i:s');
$sql = "UPDATE `employees` SET `empName`='$data->empName',`empEmail`='$data->empEmail',`empPhone`='$data->empPhone',`empId`='$data->empId',`empDesign`='$data->empDesign',`empSalary`='$data->empSalary',`empUpdated`='$newDate' WHERE `id`= '$data->id'";
  $result = mysqli_query($conn, $sql);
$conn->close();	 // connection Closed
?>