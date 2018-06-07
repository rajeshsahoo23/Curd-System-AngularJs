<?php 
require_once('config.php');
$sql = "SELECT * FROM `employees` ORDER BY id DESC";
$result = $conn->query($sql);

if ($result->num_rows > 0) { // how many rows fetching are there
	$data = array() ; // assign $data to array
    while($row = $result->fetch_assoc()) {
		$data[] = $row;
 }
} else {
    echo "No Result Found";
}
echo json_encode($data);
$conn->close();
?> 