<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Database Variables
    $HOST_NAME = "localhost";
    $USERNAME = "u152745363_Devil";
    $PASSWORD = "Bsnl@2261";
    $DABASENAME = "u152745363_bsnl_test";

// Datanase Connection
$conn = new mysqli($HOST_NAME, $USERNAME, $PASSWORD, $DABASENAME);

// Check the connection
if ($conn->connect_error) {
    die('Connection Failed : ' . $conn->connect_error);
}

// Get search term from the request
$search = isset($_GET['search']) ? $_GET['search'] : '';

// Prepare SQL query to search by Circuit ID or Name
$sql = "SELECT * FROM circuitdetails WHERE Circuit_ID LIKE ? OR Name LIKE ?";
$stmt = $conn->prepare($sql);
$searchTerm = '%' . $search . '%';
$stmt->bind_param('ss', $searchTerm, $searchTerm);

// Execute the query
$stmt->execute();
$result = $stmt->get_result();

// Fetch data
$data = [];
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

// Return JSON response
header('Content-Type: application/json');
echo json_encode($data);

// Close connection
$stmt->close();
$conn->close();
?>
