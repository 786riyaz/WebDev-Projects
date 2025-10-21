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
$Exchange = $_POST['Exchange'];
$Circuit_ID = $_POST['Circuit_ID'];
$Name = $_POST['Name'];
$Address_A = $_POST['Address_A'];
$CurrentAddress = $_POST['CurrentAddress'];
$Contact = $_POST['Contact'];
$Current_Contact = $_POST['Current_Contact'];
$Booking_Date = $_POST['Booking_Date'];

// $conn->close();
if ($conn->connect_error) {
    die('Connection Failed : ' . $conn->connect_error);
} else {

    $stmt = $conn->prepare("INSERT INTO complain (Exchange, Circuit_ID, Name, Address_A, Current_Address, Contact, Current_Contact, Booking_Date) VALUES (?, ?, ?,?,?,?,?,?)");
    $stmt->bind_param("sisssiis", $Exchange, $Circuit_ID, $Name, $Address_A, $CurrentAddress, $Contact, $Current_Contact, $Booking_Date);

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