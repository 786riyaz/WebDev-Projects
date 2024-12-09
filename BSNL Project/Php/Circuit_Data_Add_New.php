<?php

// Enable error reporting for debugging purposes during development
ini_set('display_errors', 1);             // Display runtime errors
ini_set('display_startup_errors', 1);     // Display startup errors
error_reporting(E_ALL);                   // Report all types of errors

// --- Database Configuration ---
$HOST_NAME = "localhost";                 // Database host, typically "localhost" for local development
$USERNAME = "root";                       // Username for database login
$PASSWORD = "";                           // Password for database login (empty for local setups)
$DABASENAME = "u152745363_bsnl_test";     // Name of the target database

// --- Establish Database Connection ---
$conn = new mysqli($HOST_NAME, $USERNAME, $PASSWORD, $DABASENAME);

// Check if the database connection was successful
if ($conn->connect_error) {
    die('Connection Failed: ' . $conn->connect_error);  // Terminate the script if connection fails
}

// --- Retrieve Form Data Safely ---
$Exchange = isset($_POST['Exchange']) ? $_POST['Exchange'] : '';          // Exchange name
$Circuit_ID = isset($_POST['Circuit_id']) ? $_POST['Circuit_id'] : '';    // Circuit ID (case-sensitive key from POST)
$Name = isset($_POST['Name']) ? $_POST['Name'] : '';                      // Name of the individual/entity
$Address_A = isset($_POST['Address_A']) ? $_POST['Address_A'] : '';       // Address A details
$Address_B = isset($_POST['Address_B']) ? $_POST['Address_B'] : '';       // Address B details
$Contect = isset($_POST['Contect']) ? $_POST['Contect'] : '';             // Contact information (phone/email)
$Connectivity = isset($_POST['Connectivity']) ? $_POST['Connectivity'] : ''; // Connectivity type (e.g., fiber, DSL)
$Cable_Lenght = isset($_POST['Cable_Lenght']) ? $_POST['Cable_Lenght'] : ''; // Cable length (in meters or other unit)

// --- Validate Required Fields ---
if (empty($Exchange) || empty($Circuit_ID) || empty($Name) || empty($Address_A) || empty($Address_B) || empty($Contect) || empty($Connectivity) || empty($Cable_Lenght)) {
    die('Please fill all required fields.');  // Stop execution if any required field is missing
}

// --- Prepare SQL Statement for Secure Data Insertion ---
$stmt = $conn->prepare("
    INSERT INTO circuitdetails 
    (Exchange, Circuit_ID, Name, Address_A, Address_B, Contect, Connectivity, Cable_Lenght) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
");

// Bind the form data to the SQL statement using placeholders for security
// 'sisssiss' specifies the data types: string (s), integer (i)
$stmt->bind_param("sisssiss", $Exchange, $Circuit_ID, $Name, $Address_A, $Address_B, $Contect, $Connectivity, $Cable_Lenght);

// --- Execute the Statement and Provide Feedback ---
if ($stmt->execute()) {
    echo "Your details have been added successfully.";  // Success message
} else {
    echo "Error: " . $stmt->error;  // Display error if the execution fails
}

// --- Close Database Connections ---
$stmt->close();  // Close the prepared statement
$conn->close();  // Close the database connection

?>
