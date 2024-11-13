<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


// Database Variables
$HOST_NAME = "localhost";
$USERNAME = "root";
$PASSWORD = "";
$DABASENAME = "u152745363_bsnl_test";

// Database Connection
$conn = new mysqli($HOST_NAME, $USERNAME, $PASSWORD, $DABASENAME);

// Check connection
if ($conn->connect_error) {
    die('Connection Failed: ' . $conn->connect_error);
}

// Form Variable Declaration with validation
$Exchange = isset($_POST['Exchange']) ? $_POST['Exchange'] : '';
$Circuit_ID = isset($_POST['Circuit_id']) ? $_POST['Circuit_id'] : '';  // Notice the lowercase 'Circuit_id'
$Name = isset($_POST['Name']) ? $_POST['Name'] : '';
$Address_A = isset($_POST['Address_A']) ? $_POST['Address_A'] : '';
$Address_B = isset($_POST['Address_B']) ? $_POST['Address_B'] : '';
$Contect = isset($_POST['Contect']) ? $_POST['Contect'] : '';
$Connectivity = isset($_POST['Connectivity']) ? $_POST['Connectivity'] : '';
$Cable_Lenght = isset($_POST['Cable_Lenght']) ? $_POST['Cable_Lenght'] : '';

// Validate form fields before proceeding
if (empty($Exchange) || empty($Circuit_ID) || empty($Name) || empty($Address_A) || empty($Address_B) || empty($Contect) || empty($Connectivity) || empty($Cable_Lenght)) {
    die('Please fill all required fields.');
}

// Prepare the SQL statement
$stmt = $conn->prepare("INSERT INTO circuitdetails (Exchange, Circuit_ID, Name, Address_A, Address_B, Contect, Connectivity, Cable_Lenght) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sisssiss", $Exchange, $Circuit_ID, $Name, $Address_A, $Address_B, $Contect, $Connectivity, $Cable_Lenght);

// Execute the statement
if ($stmt->execute()) {
    echo "Your details have been added successfully.";
} else {
    echo "Error: " . $stmt->error;
}

// Close connections
$stmt->close();
$conn->close();
?>
