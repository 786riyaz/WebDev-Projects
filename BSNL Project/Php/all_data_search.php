<?php

// Enable error reporting for debugging purposes
ini_set('display_errors', 1);              // Display errors in the browser
ini_set('display_startup_errors', 1);      // Display errors during PHP's startup sequence
error_reporting(E_ALL);                    // Report all types of errors

// Database Variables
$HOST_NAME = "localhost";                  // Host where the database is hosted
$USERNAME = "root";                        // Username for database connection
$PASSWORD = "";                            // Password for the database user
$DABASENAME = "bsnl_test";                 // Name of the database to connect to

// Database Connection
$conn = new mysqli($HOST_NAME, $USERNAME, $PASSWORD, $DABASENAME); // Initialize a new MySQLi connection

// Check if the connection was successful
if ($conn->connect_error) {
    die('Connection Failed : ' . $conn->connect_error);           // Stop the script if connection fails and display an error
}

// Get search term from the request (from the URL or form submission)
$search = isset($_GET['search']) ? $_GET['search'] : '';         // Check if 'search' parameter exists, otherwise use an empty string

// Prepare SQL query to search by Circuit ID or Name
$sql = "SELECT * FROM circuitdetails WHERE Circuit_ID LIKE ? OR Name LIKE ?";  // SQL query with placeholders for search terms
$stmt = $conn->prepare($sql);                                                  // Prepare the SQL statement
$searchTerm = '%' . $search . '%';                                             // Add wildcard characters to the search term for partial matches
$stmt->bind_param('ss', $searchTerm, $searchTerm);                             // Bind search term parameters (two strings)

// Execute the query
$stmt->execute();                 // Execute the prepared statement
$result = $stmt->get_result();    // Get the result set from the executed statement

// Fetch data and store it in an array
$data = [];
while ($row = $result->fetch_assoc()) {    // Loop through each row of results
    $data[] = $row;                        // Add each row to the $data array
}

// Return JSON response
header('Content-Type: application/json');  // Set content type to JSON for the response
echo json_encode($data);                   // Output the data in JSON format

// Close the prepared statement and the database connection
$stmt->close();    // Close the statement
$conn->close();    // Close the database connection

?>
