<?php
// Enable error reporting for debugging
ini_set('display_errors', 1); // Display errors
ini_set('display_startup_errors', 1); // Display startup errors
error_reporting(E_ALL); // Report all types of errors

// ==========================
// Database Configuration
// ==========================
$HOST_NAME = "localhost";         // Hostname of the database server
$USERNAME = "root";               // Username to connect to the database
$PASSWORD = "";                   // Password to connect to the database
$DABASENAME = "u152745363_bsnl_test"; // Name of the database

// ==========================
// Establish Database Connection
// ==========================
$conn = new mysqli($HOST_NAME, $USERNAME, $PASSWORD, $DABASENAME);

// Check for connection errors
if ($conn->connect_error) {
    die('Connection Failed : ' . $conn->connect_error);
}

// ==========================
// Form Variables Declaration
// ==========================
// Retrieve form data sent via POST method
$ResolutionRemark = $_POST['ResolutionRemark'];  // Remark about resolution
$ResolutionCode = $_POST['ResolutionCode'];      // Code indicating resolution type
$ResolveDateTime = $_POST['ResolveDateTime'];    // Date and time when the issue was resolved
$ID = $_POST['ID'];                              // ID of the complaint to be updated
$Duration = $_POST['Duration'];                  // Duration for resolution
$HiddenDateTime = $_POST['HiddenDateTime'];      // Hidden date-time for internal use
$HiddenDuration = $_POST['HiddenDuration'];      // Hidden duration for internal use

// ==========================
// Update Query Execution
// ==========================
// Prepare an SQL statement to update the complaint record in the database
$stmt = $conn->prepare("UPDATE complain 
    SET Is_Resolved = 1, 
        complain_solve_code = ?, 
        complain_solve_remark = ?, 
        complain_solve_date = ?, 
        Resolution_Duration = ?, 
        Hidden_Duration = ?, 
        Hidden_Date = ? 
    WHERE Complain_ID = ?");

// Bind parameters to the prepared statement
// "ssssssi" represents the types of the parameters: 
// s = string, i = integer (e.g., $ID is an integer)
$stmt->bind_param(
    "ssssssi", 
    $ResolutionCode,    // First parameter: Resolution code
    $ResolutionRemark,  // Second parameter: Resolution remark
    $ResolveDateTime,   // Third parameter: Resolve date-time
    $Duration,          // Fourth parameter: Resolution duration
    $HiddenDuration,    // Fifth parameter: Hidden duration
    $HiddenDateTime,    // Sixth parameter: Hidden date-time
    $ID                 // Seventh parameter: Complaint ID
);

// Execute the prepared statement
if ($stmt->execute()) {
    // If the query is successful
    echo "Complain Details update!";
} else {
    // If an error occurs during execution
    echo "Error: " . $stmt->error;
}

// ==========================
// Close Resources
// ==========================
// Close the prepared statement and the database connection
$stmt->close();
$conn->close();
?>
