

<?php
// Database connection details
    $servername = "localhost";
    $username = "u152745363_Devil";
    $password = "Bsnl@2261";
    $database = "u152745363_bsnl_test";

// Create a connection
$conn = new mysqli($servername, $username, $password, $database);

// Check the connection
if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
}

// SQL query to fetch data
$sql = "SELECT * FROM circuitdetails where Is_Active = 1 order by Sr_no";
$result = $conn->query($sql);

$data = [];

// Fetch the data into an array
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

// Close the database connection
$conn->close();

// Return the data as JSON
header('Content-Type: application/json');
echo json_encode($data);



?>
