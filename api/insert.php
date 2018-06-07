<?php 
require_once('config.php'); error_reporting(0);
$data = json_decode(file_get_contents("php://input"));
$newDate =date('Y-m-d H:i:s');
$sql = "INSERT INTO `employees`(`id`, `empName`, `empEmail`, `empPhone`, `empId`, `empDesign`, `empSalary`, `empDoj`, `empCreated`, `empUpdated`) VALUES ('','$data->name','$data->email','$data->phone','$data->eid','$data->design','$data->salary','$data->doj','$newDate','$newDate')";
  $result = mysqli_query($conn, $sql);
$conn->close();	 // connection Closed
?>