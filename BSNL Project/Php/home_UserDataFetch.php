<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
if (true) {
    // Database Variables
    $HOST_NAME = "localhost";
    $USERNAME = "u152745363_Devil";
    $PASSWORD = "Bsnl@2261";
    $DABASENAME = "u152745363_bsnl_test";
    
    // Datanase Connection
    $conn = new mysqli($HOST_NAME, $USERNAME, $PASSWORD, $DABASENAME);

    if ($conn->connect_error) {
        die('Connection Failed : ' . $conn->connect_error);
    } else {
        $stmt = "SELECT * from circuitdetails";
        $result = mysqli_query($conn, $stmt);
        $output = [];

        // find the number of records returned
        $recordsCount = mysqli_num_rows($result);

        // we can fetch in a better way using while loop
        while ($row = mysqli_fetch_assoc($result)) {
            // echo $row;
            $output[] = $row;
        }
    }
    $conn->close();

    echo json_encode($output);
    // echo $output;
}
?>