<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "curd_system";
date_default_timezone_set('Asia/Kolkata');
$date = date('d-m-Y H:i:s');
// Create connection
$conn = new mysqli($servername, $username, $password, $database);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error); // stop connection provide error
} 
?>