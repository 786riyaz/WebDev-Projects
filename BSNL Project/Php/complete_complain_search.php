<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
if (isset($_GET['search'])) {
    // Database Variables
    $HOST_NAME = "localhost";
    $USERNAME = "root";
    $PASSWORD = "";
    $DABASENAME = "bsnl_test";

    // Database Connection
    $conn = new mysqli($HOST_NAME, $USERNAME, $PASSWORD, $DABASENAME);

    if ($conn->connect_error) {
        die('Connection Failed: ' . $conn->connect_error);
    } else {
        // Get the search input for Circuit_ID
        $searchCircuitID = mysqli_real_escape_string($conn, $_GET['search']);

        // SQL query to search by Circuit_ID
        $stmt = "SELECT * FROM complain WHERE Circuit_ID LIKE '%$searchCircuitID%' AND Is_Resolved = 1";
        $result = mysqli_query($conn, $stmt);
        $output = [];

        // Check if records are found
        if (mysqli_num_rows($result) > 0) {
            // Fetch each row and store in output array
            while ($row = mysqli_fetch_assoc($result)) {
                $output[] = $row;
            }
        } else {
            $output = ['message' => 'No records found for the given Circuit_ID'];
        }
    }

    // Close the connection
    $conn->close();

    // Return the results as JSON
    echo json_encode($output);
} else {
    echo json_encode(['error' => 'No search parameter provided']);
}
?>