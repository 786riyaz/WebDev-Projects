<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


// Database Variables
$HOST_NAME = "localhost";
$USERNAME = "root";
$PASSWORD = "";
$DABASENAME = "bsnl_test";

// Datanase Connection
$conn = new mysqli($HOST_NAME, $USERNAME, $PASSWORD, $DABASENAME);

// Form Variable Declaration
$Reason = $_POST['Reason'];
$Circuit_ID = $_POST['Circuit_ID'];
$DateTime = $_POST['Date'];

// echo $Reason;
// echo $Circuit_ID;

// $conn->close();
if ($conn->connect_error) {
    die('Connection Failed : ' . $conn->connect_error);
} else {
    // Prepare the SQL statement
    $stmt = $conn->prepare("UPDATE circuitdetails SET Is_Active = 0, Remove_Reason = ?, Remove_Date = ? WHERE Circuit_ID = ?");

    // Bind parameters
    $stmt->bind_param("ssi", $Reason, $DateTime, $Circuit_ID);

    // Execute the statement
    if ($stmt->execute()) {
        echo "User Removed Successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }
}
// Close connections
$stmt->close();
$conn->close();
?>