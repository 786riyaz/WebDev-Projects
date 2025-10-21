<?php

// Database Variables
$HOST_NAME = "localhost";
$USERNAME = "root";
$PASSWORD = "";
$DABASENAME = "bsnl_test";

// Datanase Connection
$conn = new mysqli($HOST_NAME, $USERNAME, $PASSWORD, $DABASENAME);

// Form Variable Declaration
$CurrentAddress = $_POST['CurrentAddress'];
$CurrentNumber = $_POST['CurrentNumber'];
$circuit_id = $_POST['circuit_id'];

// $conn->close();
if ($conn->connect_error) {
    die('Connection Failed : ' . $conn->connect_error);
} else {

    $stmt = $conn->prepare("INSERT INTO complain (circuit_id, current_Address,current_contect) VALUES (?, ?, ?)");
    $stmt->bind_param("ssi", $circuit_id, $CurrentAddress, $CurrentNumber);

    // Execute the statement
    if ($stmt->execute()) {
        $last_id = $conn->insert_id;
        echo "Your Complain is booked! Your Complain ID is: " . $last_id; // Include the ID in the response
        // echo "Your Complain is booked!";
    } else {
        echo "Error: " . $stmt->error;
    }
}
// Close connections
$stmt->close();
$conn->close();
?>