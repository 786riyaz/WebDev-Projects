<?php
// Database Variables
$HOST_NAME = "localhost";
$USERNAME = "root";
$PASSWORD = "";
$DATABASENAME = "bsnl_test";

// Datanase Connection
$conn = new mysqli($HOST_NAME, $USERNAME, $PASSWORD, $DATABASENAME);

// Check the connection
if ($conn->connect_error) {
    die('Connection Failed : ' . $conn->connect_error);
}

// Get search term from the request
$search = isset($_GET['search']) ? $_GET['search'] : '';

// Prepare SQL query to search by Circuit ID or Name
$sql = "SELECT * FROM Complain WHERE Circuit_ID LIKE ? OR Name LIKE ?";
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
