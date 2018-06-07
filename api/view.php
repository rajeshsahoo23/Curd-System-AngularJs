<?php 
require_once('config.php');
$data = json_decode(file_get_contents("php://input")); // json format to php array, file_get_contents to read file
 $sql = "SELECT `id`, `empName`, `empEmail`, `empPhone`, `empId`, `empDesign`, `empSalary`, `empDoj`, `empCreated`, `empUpdated` FROM `employees` WHERE `id`= $data->id";
$result = $conn->query($sql);

if ($result->num_rows > 0) { // how many rows fetching are there
    // output data of each row
	$data = array() ;
    while($row = $result->fetch_assoc()) {
		 $data[] = $row;
    }
} else {
    echo "0 results";
}
echo json_encode($data);
$conn->close();
?> 