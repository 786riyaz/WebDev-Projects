<?php

// Enable error reporting for debugging (useful during development)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Database connection variables
$HOST_NAME = "localhost";
$USERNAME = "root";
$PASSWORD = "";
$DATABASENAME = "bsnl_test";

// Establish a connection to the MySQL database
$conn = new mysqli($HOST_NAME, $USERNAME, $PASSWORD, $DATABASENAME);

// Check the database connection
if ($conn->connect_error) {
    // If the connection fails, terminate the script with an error message
    die('Connection Failed: ' . $conn->connect_error);
}

// Retrieve and validate form data from the POST request
$Exchange = isset($_POST['Exchange']) ? $_POST['Exchange'] : '';
$Circuit_ID = isset($_POST['Circuit_id']) ? $_POST['Circuit_id'] : '';  // Notice the lowercase 'Circuit_id' in POST
$Name = isset($_POST['Name']) ? $_POST['Name'] : '';
$Address_A = isset($_POST['Address_A']) ? $_POST['Address_A'] : '';
$Address_B = isset($_POST['Address_B']) ? $_POST['Address_B'] : '';
$Contect = isset($_POST['Contect']) ? $_POST['Contect'] : '';  // Spelling 'Contect' assumed intentional based on form
$Connectivity = isset($_POST['Connectivity']) ? $_POST['Connectivity'] : '';
$Cable_Lenght = isset($_POST['Cable_Lenght']) ? $_POST['Cable_Lenght'] : '';  // Spelling 'Lenght' assumed intentional

// Check that all required fields are filled
if (empty($Exchange) || empty($Circuit_ID) || empty($Name) || empty($Address_A) || empty($Address_B) || empty($Contect) || empty($Connectivity) || empty($Cable_Lenght)) {
    // Terminate the script with a message if any field is empty
    die('Please fill all required fields.');
}

// Prepare an SQL statement for inserting data into the database
$stmt = $conn->prepare(
    "INSERT INTO circuitdetails (Exchange, Circuit_ID, Name, Address_A, Address_B, Contect, Connectivity, Cable_Lenght) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
);

// Bind the parameters to the SQL query
// "sisssiss" indicates the data types for each field: s = string, i = integer
$stmt->bind_param("sisssiss", $Exchange, $Circuit_ID, $Name, $Address_A, $Address_B, $Contect, $Connectivity, $Cable_Lenght);

// Execute the SQL statement and check if insertion was successful
if ($stmt->execute()) {
    // If successful, display a success message
    echo "Your details have been added successfully.";
} else {
    // If an error occurs, display the error message
    echo "Error: " . $stmt->error;
}

// Close the prepared statement and database connection to free up resources
$stmt->close();
$conn->close();

?>