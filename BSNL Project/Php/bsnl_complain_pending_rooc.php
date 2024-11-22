<?php

// Enable error reporting for debugging purposes
ini_set('display_errors', 1); // Display errors on the output
ini_set('display_startup_errors', 1); // Display startup errors
error_reporting(E_ALL); // Report all types of errors

if (true) { // The condition always evaluates to true, so the block always executes

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
    } else {
        // Define the SQL query to fetch unresolved complaints (Is_Resolved = 2)
        $stmt = "SELECT * FROM complain WHERE Is_Resolved = 2";

        // Execute the SQL query and get the result set
        $result = mysqli_query($conn, $stmt);

        // Initialize an empty array to store the fetched data
        $output = [];

        // Get the number of records returned by the query
        $recordsCount = mysqli_num_rows($result);

        // Fetch each row from the result set and add it to the output array
        while ($row = mysqli_fetch_assoc($result)) {
            $output[] = $row; // Append the row to the output array
        }
    }

    // Close the database connection to free resources
    $conn->close();

    // Convert the output array to a JSON format and output it as a response
    echo json_encode($output);
}

?>
