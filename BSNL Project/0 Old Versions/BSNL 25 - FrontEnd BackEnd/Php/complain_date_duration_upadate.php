<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
// Database Variables
$HOST_NAME = "localhost";
$USERNAME = "root";
$PASSWORD = "";
$DABASENAME = "bsnl_test";

// Database Connection
$conn = new mysqli($HOST_NAME, $USERNAME, $PASSWORD, $DATABASE_NAME);

if ($conn->connect_error) {
    die('Connection Failed: ' . $conn->connect_error);
} else {
    // Check if data is coming via POST request
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Get data from POST request
        $complainID = intval($_POST['ID']);
        $resolutionRemark = $_POST['ResolutionRemark'];
        $resolutionCode = $_POST['ResolutionCode'];
        $updatedDate = $_POST['DateTime'];
        $updatedDuration = $_POST['Duration'];

        // SQL Query to update complain details
        $updateQuery = "UPDATE complain 
                        SET 
                            resolution_remark = ?, 
                            resolution_code = ?, 
                            booking_date = ?, 
                            duration = ?
                        WHERE 
                            Complain_ID = ?";

        // Prepare and bind
        $stmt = $conn->prepare($updateQuery);
        $stmt->bind_param("sssii", $resolutionRemark, $resolutionCode, $updatedDate, $updatedDuration, $complainID);

        if ($stmt->execute()) {
            echo "Complain Details update!";
        } else {
            echo "Error updating record: " . $conn->error;
        }

        // Close the prepared statement
        $stmt->close();
    }
}

// Close the connection
$conn->close();
?>
