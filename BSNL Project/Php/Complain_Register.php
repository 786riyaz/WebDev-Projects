<?php
// Enable error reporting for debugging during development
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Database connection variables
$HOST_NAME = "localhost";       // Hostname for the database server
$USERNAME = "root";             // Username for the database
$PASSWORD = "";                 // Password for the database
$DABASENAME = "u152745363_bsnl_test"; // Database name

// Establish a database connection
$conn = new mysqli($HOST_NAME, $USERNAME, $PASSWORD, $DABASENAME);

// Check if the connection to the database was successful
if ($conn->connect_error) {
    die('Connection Failed : ' . $conn->connect_error); // Stop execution if the connection fails
}

// Retrieve form data sent via POST request
$Exchange = $_POST['Exchange'];          // Exchange name or ID
$Circuit_ID = $_POST['Circuit_ID'];      // Circuit ID
$Name = $_POST['Name'];                  // Name of the complainant
$Address_A = $_POST['Address_A'];        // Original address
$CurrentAddress = $_POST['CurrentAddress']; // Current address
$Contact = $_POST['Contact'];            // Original contact number
$Current_Contact = $_POST['Current_Contact']; // Current contact number
$Booking_Date = $_POST['Booking_Date'];  // Date of booking

// Prepare an SQL statement to insert the data into the 'complain' table
$stmt = $conn->prepare("
    INSERT INTO complain 
    (Exchange, Circuit_ID, Name, Address_A, Current_Address, Contact, Current_Contact, Booking_Date) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
");

// Bind the parameters to the prepared statement
// Data types: s - string, i - integer
$stmt->bind_param(
    "sisssiis", 
    $Exchange, 
    $Circuit_ID, 
    $Name, 
    $Address_A, 
    $CurrentAddress, 
    $Contact, 
    $Current_Contact, 
    $Booking_Date
);

// Execute the prepared statement
if ($stmt->execute()) {
    // Retrieve the ID of the last inserted record
    $last_id = $conn->insert_id;

    // Display success message with the unique complain ID
    echo "Your Complain is booked! Your Complain ID is: " . $last_id;
} else {
    // Display an error message if the query fails
    echo "Error: " . $stmt->error;
}

// Close the prepared statement and database connection
$stmt->close(); // Close the prepared statement
$conn->close(); // Close the database connection
?>
