<?php

// Enable error reporting for debugging purposes
ini_set('display_errors', 1); // Display errors on the output
ini_set('display_startup_errors', 1); // Display startup errors
error_reporting(E_ALL); // Report all types of errors

// Database configuration variables
$HOST_NAME = "localhost"; // Hostname for the database server
$USERNAME = "root"; // Username for the database connection
$PASSWORD = ""; // Password for the database connection
$DABASENAME = "u152745363_bsnl_test"; // Name of the database

// Establish a connection to the database
$conn = new mysqli($HOST_NAME, $USERNAME, $PASSWORD, $DABASENAME);

// Check if the connection to the database was successful
if ($conn->connect_error) {
    // Terminate the script with an error message if the connection fails
    die('Connection Failed : ' . $conn->connect_error);
}

// Retrieve the search term from the GET request (if available)
$search = isset($_GET['search']) ? $_GET['search'] : ''; // Default to an empty string if not provided

// Prepare an SQL query to search records in the "circuitdetails" table
// The query matches the "Circuit_ID" or "Name" fields based on the search term
$sql = "SELECT * FROM circuitdetails WHERE Circuit_ID LIKE ? OR Name LIKE ?";
$stmt = $conn->prepare($sql); // Prepare the query to prevent SQL injection

// Add wildcard characters to the search term for partial matching
$searchTerm = '%' . $search . '%';

// Bind the search term to the SQL query parameters (type 'ss' for two string parameters)
$stmt->bind_param('ss', $searchTerm, $searchTerm);

// Execute the SQL query
$stmt->execute();
$result = $stmt->get_result(); // Get the result set from the executed query

// Initialize an empty array to store the fetched data
$data = [];

// Fetch each row from the result set and add it to the data array
while ($row = $result->fetch_assoc()) {
    $data[] = $row; // Append the row to the data array
}

// Set the response header to indicate JSON content
header('Content-Type: application/json');

// Convert the data array to a JSON format and output it as a response
echo json_encode($data);

// Close the prepared statement and the database connection to free resources
$stmt->close();
$conn->close();

?>
