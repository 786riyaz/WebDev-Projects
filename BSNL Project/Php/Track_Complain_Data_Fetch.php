<?php
// Enable error reporting for debugging purposes
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Code logic for tracking complaint data
if (true) { 
    // Database connection variables
    $HOST_NAME = "localhost"; // Hostname for the database
    $USERNAME = "root"; // Database username
    $PASSWORD = ""; // Database password
    $DABASENAME = "u152745363_bsnl_test"; // Name of the database

    // Establish database connection
    $conn = new mysqli($HOST_NAME, $USERNAME, $PASSWORD, $DABASENAME);

    // Fetching parameters from the URL using GET method
    $CircuitID = $_GET['circuit_id']; // Circuit ID to track
    $ComplainID = $_GET['complain_id']; // Complaint ID to track

    // Check if the database connection was successful
    if ($conn->connect_error) {
        // If connection failed, output the error and terminate the script
        die('Connection Failed : ' . $conn->connect_error);
    } else {
        // SQL query to retrieve complaint data matching the provided CircuitID or ComplainID
        $stmt = "SELECT * FROM complain WHERE circuit_id = '$CircuitID' OR Complain_ID = '$ComplainID'";

        // Execute the SQL query
        $result = mysqli_query($conn, $stmt);

        // Initialize an array to store the fetched results
        $output = [];

        // Get the count of records returned by the query
        $recordsCount = mysqli_num_rows($result);

        // Fetch and store each row of the result into the $output array
        while ($row = mysqli_fetch_assoc($result)) {
            $output[] = $row;
        }
    }

    // Close the database connection
    $conn->close();

    // Convert the output array to JSON format and display it
    echo json_encode($output);
}
?>