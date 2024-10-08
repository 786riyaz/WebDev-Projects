<?php

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
$DateTime = $_POST['DateTime'];
$ID = $_POST['ID'];
$Duration = $_POST['Duration'];

// $conn->close();
if ($conn->connect_error) {
    die('Connection Failed : ' . $conn->connect_error);
} else {
    // Prepare the SQL statement
    $stmt = $conn->prepare("UPDATE complain SET Is_Resolved = 1, Resolution_Code = ?, Resolution_Remark = ?, Resolution_Date_Time = ?, Resolution_Duration = ? WHERE Complain_id = ?");

    // Bind parameters
    $stmt->bind_param("ssssi", $ResolutionCode, $ResolutionRemark, $DateTime, $Duration, $ID);

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