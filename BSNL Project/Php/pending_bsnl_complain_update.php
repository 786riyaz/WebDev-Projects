<?php
// Enable error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Database connection variables
$HOST_NAME = "localhost"; // Hostname of the database server
$USERNAME = "root"; // Username for the database connection
$PASSWORD = ""; // Password for the database connection
$DABASENAME = "u152745363_bsnl_test"; // Name of the database

// Establish database connection
$conn = new mysqli($HOST_NAME, $USERNAME, $PASSWORD, $DABASENAME);

// Check if the connection to the database failed
if ($conn->connect_error) {
    die('Connection Failed : ' . $conn->connect_error);
}

// Form variable declarations (data received from an HTML form via POST method)
$ResolutionRemark = $_POST['ResolutionRemark']; // Remark added when the complaint is resolved
$ResolutionCode = $_POST['ResolutionCode']; // Code representing the resolution type
$ResolveDateTime = $_POST['ResolveDateTime']; // Date and time when the complaint was resolved
$ID = $_POST['ID']; // Unique ID of the complaint
$Duration = $_POST['Duration']; // Duration taken to resolve the complaint
$HiddenDateTime = $_POST['HiddenDateTime']; // Additional hidden date information (if applicable)
$HiddenDuration = $_POST['HiddenDuration']; // Additional hidden duration information (if applicable)

// Prepare an SQL statement to update the complaint details
$stmt = $conn->prepare("UPDATE complain 
                        SET Is_Resolved = 2, 
                            complain_solve_code = ?, 
                            complain_solve_remark = ?, 
                            complain_solve_date = ?, 
                            Resolution_Duration = ?, 
                            Hidden_Duration = ?, 
                            Hidden_Date = ? 
                        WHERE Complain_ID = ?");

// Check if the SQL statement preparation failed
if (!$stmt) {
    die('Statement Preparation Failed: ' . $conn->error);
}

// Bind the form variables to the prepared statement as parameters
// The "ssssssi" specifies the types of the variables being bound (string, string, string, string, string, string, integer)
$stmt->bind_param("ssssssi", $ResolutionCode, $ResolutionRemark, $ResolveDateTime, $Duration, $HiddenDuration, $HiddenDateTime, $ID);

// Execute the prepared statement and check if the execution was successful
if ($stmt->execute()) {
    echo "Complain Details updated!"; // Success message
} else {
    echo "Error: " . $stmt->error; // Error message if the query fails
}

// Close the prepared statement
$stmt->close();

// Close the database connection
$conn->close();
?>
