<?php
// Database Variables
$HOST_NAME = "localhost";
$USERNAME = "root";
$PASSWORD = "";
$DATABASENAME = "bsnl_test";

// Database Connection
$conn = new mysqli($HOST_NAME, $USERNAME, $PASSWORD, $DATABASENAME);

// Check the connection
if ($conn->connect_error) {
    die(json_encode(['success' => false, 'message' => 'Connection Failed: ' . $conn->connect_error]));
}

// Get form data from POST request, validate inputs
$Exchange = isset($_POST['Exchange']) ? $conn->real_escape_string($_POST['Exchange']) : null;
$Circuit_ID = isset($_POST['Circuit_ID']) ? $conn->real_escape_string($_POST['Circuit_ID']) : null;
$Name = isset($_POST['Name']) ? $conn->real_escape_string($_POST['Name']) : null;
$Address_A = isset($_POST['Address_A']) ? $conn->real_escape_string($_POST['Address_A']) : null;
$Address_B = isset($_POST['Address_B']) ? $conn->real_escape_string($_POST['Address_B']) : null;
$Contect = isset($_POST['Contect']) ? $conn->real_escape_string($_POST['Contect']) : null;
$Connectivity = isset($_POST['Connectivity']) ? $conn->real_escape_string($_POST['Connectivity']) : null;
$Cable_Lenght = isset($_POST['Cable_Lenght']) ? $conn->real_escape_string($_POST['Cable_Lenght']) : null;

// Check if all required fields are present
if (!$Exchange || !$Circuit_ID || !$Name) {
    echo json_encode(['success' => false, 'message' => 'Required fields missing']);
    exit();
}

// Prepare SQL query to update the record
$sql = "UPDATE circuitdetails 
        SET Exchange = ?, Name = ?, Address_A = ?, Address_B = ?, Contect = ?, Connectivity = ?, Cable_Lenght = ?
        WHERE Circuit_ID = ?";

$stmt = $conn->prepare($sql);
$stmt->bind_param("ssssissi", $Exchange, $Name, $Address_A, $Address_B, $Contect, $Connectivity, $Cable_Lenght, $Circuit_ID);

// Execute the update query
if ($stmt->execute()) {
    echo json_encode(['success' => true, 'message' => 'Record updated successfully']);
} else {
    echo json_encode(['success' => false, 'message' => 'Error updating record: ' . $conn->error]);
}

// Close connections
$stmt->close();
$conn->close();
?>
