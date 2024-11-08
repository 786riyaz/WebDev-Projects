<?php
// Enable error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Check condition; here it's always true
if (true) {
    // Database Connection Variables
    $HOST_NAME = "localhost";          // Database host name
    $USERNAME = "root";                // Database username
    $PASSWORD = "";                    // Database password
    $DABASENAME = "bsnl_test";         // Database name

    // Establish a new database connection
    $conn = new mysqli($HOST_NAME, $USERNAME, $PASSWORD, $DABASENAME);

    // Check if the connection was successful
    if ($conn->connect_error) {
        // Output an error message and terminate the script if connection fails
        die('Connection Failed : ' . $conn->connect_error);
    } else {
        // SQL query to fetch circuit details and unresolved complaints
        $stmt = "SELECT 
                    CD.Exchange, 
                    CD.Circuit_ID, 
                    CD.Name, 
                    CD.Address_A, 
                    CD.Address_B,
                    CD.Contect, 
                    CD.Connectivity, 
                    CD.Cable_Lenght, 
                    C.Is_Resolved, 
                    C.complain_id 
                FROM circuitdetails CD 
                LEFT JOIN complain C ON C.circuit_id = CD.circuit_id 
                WHERE CD.circuit_id = '" . $_GET['circuit_id'] . "' 
                AND C.Is_Resolved = '0'";
        
        // Execute the query
        $result = mysqli_query($conn, $stmt);
        
        // Initialize an empty array to store the query results
        $output = [];

        // Get the number of records returned by the query
        $recordsCount = mysqli_num_rows($result);

        // Loop through each record and add it to the output array
        while ($row = mysqli_fetch_assoc($result)) {
            $output[] = $row;
        }
    }
    
    // Close the database connection
    $conn->close();

    // Output the query results as a JSON-encoded array
    echo json_encode($output);
}
?>
