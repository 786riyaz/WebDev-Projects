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
$ResolutionRemark = $_POST['ResolutionRemark'];
$ResolutionCode = $_POST['ResolutionCode'];
$ResolveDateTime = $_POST['ResolveDateTime'];
$ID = $_POST['ID'];
$Duration = $_POST['Duration'];
$HiddenDateTime = $_POST['HiddenDateTime'];
$HiddenDuration = $_POST['HiddenDuration'];

// $conn->close();
if ($conn->connect_error) {
    die('Connection Failed : ' . $conn->connect_error);
} else {
    // Prepare the SQL statement
    $stmt = $conn->prepare("UPDATE complain SET Is_Resolved = 1, complain_solve_code = ?, complain_solve_remark = ?, complain_solve_date = ?, Resolution_Duration = ?, Hidden_Duration = ?, Hidden_Date = ? WHERE Complain_ID = ?");

    // Bind parameters
    $stmt->bind_param("ssssssi", $ResolutionCode, $ResolutionRemark, $ResolveDateTime, $Duration, $HiddenDuration, $HiddenDateTime, $ID);

    // Execute the statement
    if ($stmt->execute()) {
        echo "Complain Details update!";
    } else {
        echo "Error: " . $stmt->error;
    }
}
// Close connections
$stmt->close();
$conn->close();
?>